import { apiSlice } from '../api/apiSlice';

export const educationApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createEducation: builder.mutation({
			query: (data) => ({
				url: '/education',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['user'],
		}),
		deleteEducation: builder.mutation({
			query: (id) => ({
				url: `/education/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['user'],
		}),
	}),
});

export const { useCreateEducationMutation, useDeleteEducationMutation } =
	educationApi;
