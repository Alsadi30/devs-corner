import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ReactToastify = () => {
	const notify = () => toast('Wow so easy !');

	return (
		<div>
			<button onClick={notify}>Notify !</button>
			<ToastContainer />
		</div>
	);
};

export default ReactToastify;
