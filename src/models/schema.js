export const schema = {
	models: {
		Product: {
			syncable: true,
			name: 'Product',
			pluralName: 'Products',
			attributes: [
				{
					type: 'model',
					properties: {}
				}
			],
			fields: {
				id: {
					name: 'id',
					isArray: false,
					type: 'ID',
					isRequired: true,
					attributes: []
				},
				name: {
					name: 'name',
					isArray: false,
					type: 'String',
					isRequired: true,
					attributes: []
				},
				manufacturer: {
					name: 'manufacturer',
					isArray: false,
					type: 'String',
					isRequired: true,
					attributes: []
				},
				price: {
					name: 'price',
					isArray: false,
					type: 'Int',
					isRequired: true,
					attributes: []
				},
				currency: {
					name: 'currency',
					isArray: false,
					type: 'String',
					isRequired: true,
					attributes: []
				},
				amount: {
					name: 'amount',
					isArray: false,
					type: 'Int',
					isRequired: true,
					attributes: []
				}
			}
		}
	},
	enums: {},
	version: '7b2de942cf213b7864b310ac1912a5e8'
};
