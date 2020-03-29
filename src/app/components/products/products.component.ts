import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/models';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
	@Input() public products: Product[];
	@Output() public updateProduct = new EventEmitter<Product>();
	@Output() public deleteProduct = new EventEmitter<Product>();
}
