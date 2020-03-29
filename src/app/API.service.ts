/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from '@angular/core';
import API, { graphqlOperation } from '@aws-amplify/api';
import { GraphQLResult } from '@aws-amplify/api/lib/types';
import * as Observable from 'zen-observable';

export type CreateProductInput = {
	id?: string | null;
	name: string;
	manufacturer: string;
	price: number;
	currency: string;
	amount: number;
	_version?: number | null;
};

export type ModelProductConditionInput = {
	name?: ModelStringInput | null;
	manufacturer?: ModelStringInput | null;
	price?: ModelIntInput | null;
	currency?: ModelStringInput | null;
	amount?: ModelIntInput | null;
	and?: Array<ModelProductConditionInput | null> | null;
	or?: Array<ModelProductConditionInput | null> | null;
	not?: ModelProductConditionInput | null;
};

export type ModelStringInput = {
	ne?: string | null;
	eq?: string | null;
	le?: string | null;
	lt?: string | null;
	ge?: string | null;
	gt?: string | null;
	contains?: string | null;
	notContains?: string | null;
	between?: Array<string | null> | null;
	beginsWith?: string | null;
	attributeExists?: boolean | null;
	attributeType?: ModelAttributeTypes | null;
	size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
	binary = 'binary',
	binarySet = 'binarySet',
	bool = 'bool',
	list = 'list',
	map = 'map',
	number = 'number',
	numberSet = 'numberSet',
	string = 'string',
	stringSet = 'stringSet',
	_null = '_null'
}

export type ModelSizeInput = {
	ne?: number | null;
	eq?: number | null;
	le?: number | null;
	lt?: number | null;
	ge?: number | null;
	gt?: number | null;
	between?: Array<number | null> | null;
};

export type ModelIntInput = {
	ne?: number | null;
	eq?: number | null;
	le?: number | null;
	lt?: number | null;
	ge?: number | null;
	gt?: number | null;
	between?: Array<number | null> | null;
	attributeExists?: boolean | null;
	attributeType?: ModelAttributeTypes | null;
};

export type UpdateProductInput = {
	id: string;
	name?: string | null;
	manufacturer?: string | null;
	price?: number | null;
	currency?: string | null;
	amount?: number | null;
	_version?: number | null;
};

export type DeleteProductInput = {
	id?: string | null;
	_version?: number | null;
};

export type ModelProductFilterInput = {
	id?: ModelIDInput | null;
	name?: ModelStringInput | null;
	manufacturer?: ModelStringInput | null;
	price?: ModelIntInput | null;
	currency?: ModelStringInput | null;
	amount?: ModelIntInput | null;
	and?: Array<ModelProductFilterInput | null> | null;
	or?: Array<ModelProductFilterInput | null> | null;
	not?: ModelProductFilterInput | null;
};

export type ModelIDInput = {
	ne?: string | null;
	eq?: string | null;
	le?: string | null;
	lt?: string | null;
	ge?: string | null;
	gt?: string | null;
	contains?: string | null;
	notContains?: string | null;
	between?: Array<string | null> | null;
	beginsWith?: string | null;
	attributeExists?: boolean | null;
	attributeType?: ModelAttributeTypes | null;
	size?: ModelSizeInput | null;
};

export type CreateProductMutation = {
	__typename: 'Product';
	id: string;
	name: string;
	manufacturer: string;
	price: number;
	currency: string;
	amount: number;
	_version: number;
	_deleted: boolean | null;
	_lastChangedAt: number;
};

export type UpdateProductMutation = {
	__typename: 'Product';
	id: string;
	name: string;
	manufacturer: string;
	price: number;
	currency: string;
	amount: number;
	_version: number;
	_deleted: boolean | null;
	_lastChangedAt: number;
};

export type DeleteProductMutation = {
	__typename: 'Product';
	id: string;
	name: string;
	manufacturer: string;
	price: number;
	currency: string;
	amount: number;
	_version: number;
	_deleted: boolean | null;
	_lastChangedAt: number;
};

export type SyncProductsQuery = {
	__typename: 'ModelProductConnection';
	items: Array<{
		__typename: 'Product';
		id: string;
		name: string;
		manufacturer: string;
		price: number;
		currency: string;
		amount: number;
		_version: number;
		_deleted: boolean | null;
		_lastChangedAt: number;
	} | null> | null;
	nextToken: string | null;
	startedAt: number | null;
};

export type GetProductQuery = {
	__typename: 'Product';
	id: string;
	name: string;
	manufacturer: string;
	price: number;
	currency: string;
	amount: number;
	_version: number;
	_deleted: boolean | null;
	_lastChangedAt: number;
};

export type ListProductsQuery = {
	__typename: 'ModelProductConnection';
	items: Array<{
		__typename: 'Product';
		id: string;
		name: string;
		manufacturer: string;
		price: number;
		currency: string;
		amount: number;
		_version: number;
		_deleted: boolean | null;
		_lastChangedAt: number;
	} | null> | null;
	nextToken: string | null;
	startedAt: number | null;
};

export type OnCreateProductSubscription = {
	__typename: 'Product';
	id: string;
	name: string;
	manufacturer: string;
	price: number;
	currency: string;
	amount: number;
	_version: number;
	_deleted: boolean | null;
	_lastChangedAt: number;
};

export type OnUpdateProductSubscription = {
	__typename: 'Product';
	id: string;
	name: string;
	manufacturer: string;
	price: number;
	currency: string;
	amount: number;
	_version: number;
	_deleted: boolean | null;
	_lastChangedAt: number;
};

export type OnDeleteProductSubscription = {
	__typename: 'Product';
	id: string;
	name: string;
	manufacturer: string;
	price: number;
	currency: string;
	amount: number;
	_version: number;
	_deleted: boolean | null;
	_lastChangedAt: number;
};

@Injectable({
	providedIn: 'root'
})
export class APIService {
	async CreateProduct(input: CreateProductInput, condition?: ModelProductConditionInput): Promise<CreateProductMutation> {
		const statement = `mutation CreateProduct($input: CreateProductInput!, $condition: ModelProductConditionInput) {
        createProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          manufacturer
          price
          currency
          amount
          _version
          _deleted
          _lastChangedAt
        }
      }`;
		const gqlAPIServiceArguments: any = {
			input
		};
		if (condition) {
			gqlAPIServiceArguments.condition = condition;
		}
		const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
		return <CreateProductMutation>response.data.createProduct;
	}
	async UpdateProduct(input: UpdateProductInput, condition?: ModelProductConditionInput): Promise<UpdateProductMutation> {
		const statement = `mutation UpdateProduct($input: UpdateProductInput!, $condition: ModelProductConditionInput) {
        updateProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          manufacturer
          price
          currency
          amount
          _version
          _deleted
          _lastChangedAt
        }
      }`;
		const gqlAPIServiceArguments: any = {
			input
		};
		if (condition) {
			gqlAPIServiceArguments.condition = condition;
		}
		const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
		return <UpdateProductMutation>response.data.updateProduct;
	}
	async DeleteProduct(input: DeleteProductInput, condition?: ModelProductConditionInput): Promise<DeleteProductMutation> {
		const statement = `mutation DeleteProduct($input: DeleteProductInput!, $condition: ModelProductConditionInput) {
        deleteProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          manufacturer
          price
          currency
          amount
          _version
          _deleted
          _lastChangedAt
        }
      }`;
		const gqlAPIServiceArguments: any = {
			input
		};
		if (condition) {
			gqlAPIServiceArguments.condition = condition;
		}
		const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
		return <DeleteProductMutation>response.data.deleteProduct;
	}
	async SyncProducts(
		filter?: ModelProductFilterInput,
		limit?: number,
		nextToken?: string,
		lastSync?: number
	): Promise<SyncProductsQuery> {
		const statement = `query SyncProducts($filter: ModelProductFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncProducts(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            manufacturer
            price
            currency
            amount
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
		const gqlAPIServiceArguments: any = {};
		if (filter) {
			gqlAPIServiceArguments.filter = filter;
		}
		if (limit) {
			gqlAPIServiceArguments.limit = limit;
		}
		if (nextToken) {
			gqlAPIServiceArguments.nextToken = nextToken;
		}
		if (lastSync) {
			gqlAPIServiceArguments.lastSync = lastSync;
		}
		const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
		return <SyncProductsQuery>response.data.syncProducts;
	}
	async GetProduct(id: string): Promise<GetProductQuery> {
		const statement = `query GetProduct($id: ID!) {
        getProduct(id: $id) {
          __typename
          id
          name
          manufacturer
          price
          currency
          amount
          _version
          _deleted
          _lastChangedAt
        }
      }`;
		const gqlAPIServiceArguments: any = {
			id
		};
		const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
		return <GetProductQuery>response.data.getProduct;
	}
	async ListProducts(filter?: ModelProductFilterInput, limit?: number, nextToken?: string): Promise<ListProductsQuery> {
		const statement = `query ListProducts($filter: ModelProductFilterInput, $limit: Int, $nextToken: String) {
        listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            manufacturer
            price
            currency
            amount
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
		const gqlAPIServiceArguments: any = {};
		if (filter) {
			gqlAPIServiceArguments.filter = filter;
		}
		if (limit) {
			gqlAPIServiceArguments.limit = limit;
		}
		if (nextToken) {
			gqlAPIServiceArguments.nextToken = nextToken;
		}
		const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
		return <ListProductsQuery>response.data.listProducts;
	}
	OnCreateProductListener: Observable<OnCreateProductSubscription> = API.graphql(
		graphqlOperation(
			`subscription OnCreateProduct {
        onCreateProduct {
          __typename
          id
          name
          manufacturer
          price
          currency
          amount
          _version
          _deleted
          _lastChangedAt
        }
      }`
		)
	) as Observable<OnCreateProductSubscription>;

	OnUpdateProductListener: Observable<OnUpdateProductSubscription> = API.graphql(
		graphqlOperation(
			`subscription OnUpdateProduct {
        onUpdateProduct {
          __typename
          id
          name
          manufacturer
          price
          currency
          amount
          _version
          _deleted
          _lastChangedAt
        }
      }`
		)
	) as Observable<OnUpdateProductSubscription>;

	OnDeleteProductListener: Observable<OnDeleteProductSubscription> = API.graphql(
		graphqlOperation(
			`subscription OnDeleteProduct {
        onDeleteProduct {
          __typename
          id
          name
          manufacturer
          price
          currency
          amount
          _version
          _deleted
          _lastChangedAt
        }
      }`
		)
	) as Observable<OnDeleteProductSubscription>;
}
