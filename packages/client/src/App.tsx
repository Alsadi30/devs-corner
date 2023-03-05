import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import useAuthCheck from './hooks/useAuthCheck';
import { router } from './routes';
function App() {
	const authChecked = useAuthCheck();

	return !authChecked ? (
		<div>Checking authentication....</div>
	) : (
		<Router>
			<Routes>
				{router.map((route, index) => {
					return (
						<Route
							key={index}
							path={route.path}
							element={
								route.public ? (
									<PublicRoute>
										{<route.component />}
									</PublicRoute>
								) : (
									<PrivateRoute>
										<route.component />
									</PrivateRoute>
								)
							}
						/>
					);
				})}
			</Routes>
		</Router>
	);
}

export default App;
