import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: null,
};

const projectSlice = createSlice({
	name: 'project',
	initialState,
	reducers: {},
});

export const {} = projectSlice.actions;
export default projectSlice.reducer;
