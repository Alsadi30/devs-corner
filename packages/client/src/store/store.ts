import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import authSliceReducer from '../features/auth/authSlice';
import educationSliceReducer from '../features/education/educationSlice';
import profileSliceReducer from '../features/profile/profileSlice';
import projectSliceReducer from '../features/project/projectSlice';
import userSliceReducer from '../features/user/userSlice';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authSliceReducer,
		profile: profileSliceReducer,
		education: educationSliceReducer,
		project: projectSliceReducer,
		user: userSliceReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddlewares) =>
		getDefaultMiddlewares().concat(apiSlice.middleware),
});
