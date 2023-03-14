import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getUserData: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { getUserData } = userSlice.actions;
export default userSlice.reducer;
