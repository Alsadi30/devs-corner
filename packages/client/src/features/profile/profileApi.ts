import { apiSlice } from '../api/apiSlice';

export const profileApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getProfile: builder.query({
			query: (id) => `/users/${id}`,
			providesTags: ['profile'],
		}),

		createProfile: builder.mutation({
			query: (data) => ({
				url: '/profile',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['profile'],

			/**
			 *
			 * @pTODO: when will refactor time and caching ,
			 * I Will transfer this code into getProfile
			 */

			// async onQueryStarted(arg, { queryFulfilled, dispatch }) {
			// 	try {
			// 		const result = await queryFulfilled;

			// 		dispatch(userProfileData(result.data));
			// 	} catch (err) {
			// 		console.log('profileApi - crateData Error: ', err);
			// 	}
			// },
		}),
	}),
});

export const { useGetProfileQuery, useCreateProfileMutation } = profileApi;
