import { useState } from 'react';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import Section from '../../../../../material-ui/src/Organisms/Section';
import CredentialModel from '../../ModalItems/CredentialModal';
import CredentialItem from '../../SectionItems/CredentialItem';

interface Props {
	credentials: Array<object>;
}

const CredentialSection = ({ credentials }: Props) => {
	const [credopen, setCredOpen] = useState(false);

	const handleCredential = () => {
		setCredOpen(!credopen);
	};

	const formData = new FormData();

	const handleCredentialSubmit = (formdata: object) => {
		// console.log(formdata)
		for (const [key, value] of Object.entries(formdata)) {
			console.log(`${key}: ${value}`);
			formData.append(key, value);
		}
		// in this line create rtk hook
		handleCredential();
	};

	return (
		<>
			<Section
				title='Credentials'
				Component={CredentialItem}
				Items={credentials}
				handleClick={handleCredential}
			/>
			<CustomizedDialogs
				title='Add Credential'
				open={credopen}
				handleClose={handleCredential}
			>
				<CredentialModel onSubmit={handleCredentialSubmit} />
			</CustomizedDialogs>
		</>
	);
};

export default CredentialSection;
