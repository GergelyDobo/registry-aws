import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Product } from 'src/models';
import { MatDialog } from '@angular/material';
import { isNil } from 'lodash';
import { DataStore } from '@aws-amplify/datastore';
import { FormComponent } from './components/form/form.component';
import { NewProductComponent } from './components/new-product/new-product.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	private products = new BehaviorSubject<Product[]>(null);

	constructor(private readonly dialog: MatDialog) {}

	public ngOnInit(): void {
		if (isNil(this.products.getValue())) {
			this.setProducts();
		}
		DataStore.observe<Product>(Product).subscribe(() => this.setProducts());
	}

	public get products$(): Observable<Product[]> {
		return this.products.asObservable();
	}

	public setProducts(): void {
		DataStore.query<Product>(Product).then((products) => this.products.next(products));
	}

	public updateProduct(product: Product): void {
		this.dialog
			.open(FormComponent, { data: product })
			.afterClosed()
			.pipe(take(1))
			.subscribe(async (updatedProduct) => {
				if (!isNil(updatedProduct) && !isNil(updatedProduct.data)) {
					const original = await DataStore.query<Product>(Product, product.id);
					await DataStore.save<Product>(
						Product.copyOf(original, (updated) => {
							(updated.name = updatedProduct.data.name),
								(updated.manufacturer = updatedProduct.data.manufacturer),
								(updated.price = updatedProduct.data.price),
								(updated.currency = updatedProduct.data.currency),
								(updated.amount = updatedProduct.data.amount);
						})
					);
				}
			});
	}

	public createProduct(): void {
		this.dialog
			.open(NewProductComponent)
			.afterClosed()
			.pipe(take(1))
			.subscribe(async (product) => {
				if (!isNil(product) && !isNil(product.data)) {
					await DataStore.save<Product>(new Product(product.data));
				}
			});
	}

	public deleteProduct(product: Product): void {
		DataStore.delete<Product>(product);
	}
}
