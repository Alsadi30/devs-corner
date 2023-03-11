import { apiSlice } from '../api/apiSlice';


export const userApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getUser: builder.query({
			query: (id) => `/users/${id}`,
			providesTags: ['user'],
		}),
		deleteUser: builder.mutation({
			query: (id) => ({
				url: `/users/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['user'],
		}),
	}),
});

export const { useGetUserQuery, useDeleteUserMutation } = userApi;
