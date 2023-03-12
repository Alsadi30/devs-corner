import { apiSlice } from '../api/apiSlice';

export const credentialApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createCredential: builder.mutation({
			query: (data) => ({
				url: '/credential',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['user'],
		}),
		deleteCredential: builder.mutation({
			query: (id) => ({
				url: `/credential/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['user'],
		}),
	}),
});

export const { useCreateCredentialMutation, useDeleteCredentialMutation } =
	credentialApi;
