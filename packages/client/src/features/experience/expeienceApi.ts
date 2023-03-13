import { apiSlice } from '../api/apiSlice';

export const experienceApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createExperience: builder.mutation({
			query: (data) => ({
				url: '/experience',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['user'],
		}),
		deleteExperience: builder.mutation({
			query: (id) => ({
				url: `/experience/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['user'],
		}),
	}),
});

export const { useCreateExperienceMutation, useDeleteExperienceMutation } =
	experienceApi;
