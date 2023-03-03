import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: null,
};

const educationSlice = createSlice({
	name: 'education',
	initialState,
	reducers: {},
});

export const {} = educationSlice.actions;
export default educationSlice.reducer;
