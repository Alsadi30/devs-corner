import { apiSlice } from '../api/apiSlice';

export const userApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getUser: builder.query({
			query: (id) => `/users/${id}`,
		}),
		deleteUser: builder.mutation({
			query: (id) => ({
				url: `/users/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const { useGetUserQuery, useDeleteUserMutation } = userApi;
