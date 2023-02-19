
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { router } from './routes';
function App() {
	return (
		<Router>
			<Routes>
				{router.map((route, index) => {
					return (
						<Route
							key={index}
							path={route.path}
							element={<route.component />}
						/>
					);
				})}
			</Routes>
		</Router>
	);

}

export default App;
