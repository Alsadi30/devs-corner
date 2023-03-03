import jwt_token_data from 'jwt-decode';
import { apiSlice } from '../api/apiSlice';

const localAuth = localStorage?.getItem('auth');
let user;
if (localAuth) {
	const auth = JSON.parse(localAuth);
	user = jwt_token_data(auth?.token);
}


export const userApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getUser: builder.query({
			query: () => `/users/${user.id}`,
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
