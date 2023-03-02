import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

type PrivateRouteProps = {
	children: React.ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
	const isLoggedIn = useAuth();

	return isLoggedIn ? <>{children}</> : <Navigate to='/login' />;
};

export default PrivateRoute;
