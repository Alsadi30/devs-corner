import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: null,
};

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
});

export const {} = profileSlice.actions;
export default profileSlice.reducer;
