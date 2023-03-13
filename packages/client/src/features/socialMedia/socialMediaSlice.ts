import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: null,
};

const socialMediaSlice = createSlice({
	name: 'socialMedia',
	initialState,
	reducers: {},
});

export const {} = socialMediaSlice.actions;
export default socialMediaSlice.reducer;
