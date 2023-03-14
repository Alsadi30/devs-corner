import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

type ErrProps = {
	error: string;
};

const ReactToastify = ({ error }: ErrProps) => {
	const notify = (ErrorData: any) => toast(ErrorData);
	if (error) {
		notify(error);
	}

	return (
		<div>
			<ToastContainer />
		</div>
	);
};

export default ReactToastify;
