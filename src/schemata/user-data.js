export default {
	id: 'user_data',
	type: 'object',
	properties: {
		id: { type: 'string' },
		projects: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					id: { type: 'string' },
					title: { type: 'string' },
					created: { type: 'string' },
					updated: { type: 'string' },
				},
			},
		},
		sessions: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					id: { type: 'string' },
					start_time: { type: 'string' },
					end_time: { type: 'string' },
				},
			},
		},
	},
}
