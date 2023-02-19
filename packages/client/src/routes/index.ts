import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/DashBoard/index';
import Register from '../pages/Register/index';

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
