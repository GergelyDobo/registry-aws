import { ModelInit, MutableModel, PersistentModelConstructor } from '@aws-amplify/datastore';

export declare class Product {
	readonly id: string;
	readonly name: string;
	readonly manufacturer: string;
	readonly price: number;
	readonly currency: string;
	readonly amount: number;
	constructor(init: ModelInit<Product>);
	static copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}
