import jwt_token_data from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLoggedIn } from '../features/auth/authSlice';

export default function useAuthCheck() {
	const dispatch = useDispatch();
	const [authChecked, setAuthChecked] = useState(false);

	useEffect(() => {
		const localAuth = localStorage?.getItem('auth');

		if (localAuth) {
			const auth = JSON.parse(localAuth);
			if (auth?.token) {
				const tokenData = jwt_token_data(auth?.token);

				dispatch(
					userLoggedIn({
						token: auth.token,
						user: tokenData,
					})
				);
			}
		}
		setAuthChecked(true);
	}, [dispatch, setAuthChecked]);

	return authChecked;
}
