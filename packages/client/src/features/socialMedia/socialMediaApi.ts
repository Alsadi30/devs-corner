import { apiSlice } from '../api/apiSlice';

export const socialMediaApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createSocialMedia: builder.mutation({
			query: (data) => ({
				url: '/socialmedia',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['user'],
		}),
	}),
});

export const { useCreateSocialMediaMutation } = socialMediaApi;
