import { apiSlice } from '../api/apiSlice';

export const profileApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getProfile: builder.query({
			query: (id) => `/profile/${id}`,
		}),
		createProfile: builder.mutation({
			query: (data) => ({
				url: '/profile',
				method: 'POST',
				body: data,
			}),
		}),
	}),
});

export const { useGetProfileQuery, useCreateProfileMutation } = profileApi;
