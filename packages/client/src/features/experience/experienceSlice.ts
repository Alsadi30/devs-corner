import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: null,
};

const experienceSlice = createSlice({
	name: 'experience',
	initialState,
	reducers: {},
});

export const {} = experienceSlice.actions;
export default experienceSlice.reducer;
