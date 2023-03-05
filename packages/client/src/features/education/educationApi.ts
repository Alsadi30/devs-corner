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
	}),
});

export const { useCreateEducationMutation } = educationApi;
