import jwt_token_data from 'jwt-decode';
import { apiSlice } from '../api/apiSlice';
import { userLoggedIn } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (data) => ({
				url: '/auth/register',
				method: 'POST',
				body: data,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const result = await queryFulfilled;
					const tokenData = jwt_token_data(result.data.token);

					localStorage.setItem(
						'auth',
						JSON.stringify({
							token: result.data.token,
						})
					);

					dispatch(
						userLoggedIn({
							token: result.data.token,
							user: tokenData,
						})
					);
				} catch (err) {
					// do nothing
				}
			},
		}),
		login: builder.mutation({
			query: (data) => ({
				url: '/auth/login',
				method: 'POST',
				body: data,
			}),

			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const result = await queryFulfilled;
					const tokenData = jwt_token_data(result.data.token);

					localStorage.setItem(
						'auth',
						JSON.stringify({
							token: result.data.token,
						})
					);

					dispatch(
						userLoggedIn({
							token: result.data.token,
							user: tokenData,
						})
					);
				} catch (err) {
					// do nothing
				}
			},
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
