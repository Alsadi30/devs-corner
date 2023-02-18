import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';

export const router = [
	{
		path: '/',
		component: Dashboard,
	},
	{
		path: '/dashboard',
		component: Dashboard,
	},
	{
		path: '/login',
		component: Login,
	},
	{
		path: '/register',
		component: Register,
	},
	{
		path: '*',
		component: NotFound,
	},
];
