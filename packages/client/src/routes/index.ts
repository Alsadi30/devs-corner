import Dashboard from '../pages/DashBoard/index';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register/index';

export const router = [
	{
		path: '/',
		component: Dashboard,
		public: false,
	},
	{
		path: '/dashboard',
		component: Dashboard,
		public: false,
	},
	{
		path: '/login',
		component: Login,
		public: true,
	},
	{
		path: '/register',
		component: Register,
		public: true,
	},
	{
		path: '*',
		component: NotFound,
		public: true,
	},
];
