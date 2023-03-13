import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: null,
};

const credentialSlice = createSlice({
	name: 'credential',
	initialState,
	reducers: {},
});

export const {} = credentialSlice.actions;
export default credentialSlice.reducer;
