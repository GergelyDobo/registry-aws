import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Product } from 'src/models';
import { MatDialog } from '@angular/material';
import { isNil } from 'lodash';
import { DataStore } from '@aws-amplify/datastore';
import { FormComponent } from './components/form/form.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ProductService } from './services/product/product.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private readonly dialog: MatDialog, public readonly productService: ProductService) {}

	public updateProduct(product: Product): void {
		this.dialog
			.open(FormComponent, { data: product })
			.afterClosed()
			.pipe(take(1))
			.subscribe(async (updatedProduct) => {
				if (!isNil(updatedProduct) && !isNil(updatedProduct.data)) {
					await this.productService.updateProduct(product, updatedProduct.data);
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
					await this.productService.createProduct(product.data);
				}
			});
	}

	public deleteProduct(product: Product): void {
		this.productService.deleteProduct(product);
	}
}
