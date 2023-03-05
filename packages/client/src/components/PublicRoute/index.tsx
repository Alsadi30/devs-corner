import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

type PublicRouteProps = {
	children: React.ReactNode;
};

const PublicRoute = ({ children }: PublicRouteProps) => {
	const isLoggedIn = useAuth();

	return !isLoggedIn ? <>{children}</> : <Navigate to='/dashboard' />;
};

export default PublicRoute;
