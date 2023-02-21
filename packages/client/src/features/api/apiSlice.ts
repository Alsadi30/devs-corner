import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000',
		prepareHeaders: async (headers, { getState, endpoint }) => {
			const token = getState()?.auth?.accessToken;
			console.log('getState.Auth' + getState()?.auth);
			if (token) {
				headers.set('Authorization', `Bearer ${token}`);
			}

			return headers;
		},
	}),
	tagTypes: [],
	endpoints: (builder) => ({}),
});
