import { apiSlice } from '../api/apiSlice';

export const profileApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createProfile: builder.mutation({
			query: (data) => ({
				url: '/profile',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['user'],
		}),
		updateProfile: builder.mutation({
			query: ({ id, data }) => ({
				url: `/profile/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['user'],
		}),
	}),
});

export const { useCreateProfileMutation, useUpdateProfileMutation } =
	profileApi;
