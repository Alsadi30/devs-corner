import { apiSlice } from '../api/apiSlice';

export const projectApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createProject: builder.mutation({
			query: (data) => ({
				url: '/project',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['user'],
		}),
		deleteProject: builder.mutation({
			query: (id) => ({
				url: `/project/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['user'],
		}),
	}),
});

export const { useCreateProjectMutation, useDeleteProjectMutation } =
	projectApi;
