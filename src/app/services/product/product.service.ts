import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/models';
import { DataStore } from '@aws-amplify/datastore';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private _products = new BehaviorSubject<Product[]>(null);
	constructor() {
		DataStore.observe<Product>(Product).subscribe(() => this.setProducts());
	}

	public get products$(): Observable<Product[]> {
		return this._products.asObservable();
	}

	private async setProducts(): Promise<void> {
		await DataStore.query<Product>(Product).then((products) => this._products.next(products));
	}

	public async createProduct(product: Product): Promise<void> {
		await DataStore.save<Product>(new Product(product));
	}

	public async deleteProduct(product: Product): Promise<void> {
		await DataStore.delete<Product>(product);
	}

	public async updateProduct(originalProduct: Product, updatedProduct: Product): Promise<void> {
		const original = await DataStore.query<Product>(Product, originalProduct.id);
		await DataStore.save<Product>(
			Product.copyOf(original, (updated) => {
				(updated.name = updatedProduct.name),
					(updated.manufacturer = updatedProduct.manufacturer),
					(updated.price = updatedProduct.price),
					(updated.currency = updatedProduct.currency),
					(updated.amount = updatedProduct.amount);
			})
		);
	}
}
