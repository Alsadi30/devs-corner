import { apiSlice } from '../api/apiSlice';
import { getUserData } from './userSlice';

export const userApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getUser: builder.query({
			query: (id) => `/users/${id}`,
			providesTags: ['user'],

			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const result = await queryFulfilled;
					dispatch(getUserData(result.data[0]));
				} catch (err) {
					// do nothing
				}
			},
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
