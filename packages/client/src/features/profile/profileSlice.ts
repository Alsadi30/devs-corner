import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: null,
};

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		userProfileData: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const { userProfileData } = profileSlice.actions;
export default profileSlice.reducer;
