import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		// baseUrl: 'https://devs-corner.onrender.com/api/v1',
		baseUrl: 'http://localhost:4000/api/v1',
		prepareHeaders: async (headers, { getState, endpoint }) => {
			const token = getState()?.auth?.token;

			if (token) {
				headers.set('Authorization', `Bearer ${token}`);
			}

			return headers;
		},
	}),
	tagTypes: ['user'],
	endpoints: (builder) => ({}),
});
