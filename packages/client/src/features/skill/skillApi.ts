import { apiSlice } from '../api/apiSlice';

export const projectApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getSkill: builder.query({
			query: () => ({
				url: '/skill',
				method: 'GET',
			}),
		}),
		addSkill: builder.mutation({
			query: (id) => ({
				url: `/skill/${id}`,
				method: 'POST',
			}),
			invalidatesTags: ['user'],
		}),
		deleteSkill: builder.mutation({
			query: (id) => ({
				url: `/skill/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['user'],
		}),
	}),
});

export const { useGetSkillQuery, useDeleteSkillMutation, useAddSkillMutation } =
	projectApi;
