import { useState } from 'react';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import Section from '../../../../../material-ui/src/Organisms/Section';
import { useCreateCredentialMutation } from '../../../features/credential/credentialApi';
import CredentialModel from '../../ModalItems/CredentialModal';
import CredentialItem from '../../SectionItems/CredentialItem';

interface Props {
	credentials: Array<object>;
}

const CredentialSection = ({ credentials }: Props) => {
	const [credopen, setCredOpen] = useState(false);
	const [createCredential] = useCreateCredentialMutation();

	const handleCredential = () => {
		setCredOpen(!credopen);
	};

	const formData = new FormData();

	const handleCredentialSubmit = (data: object) => {
		for (const [key, value] of Object.entries(data)) {
			formData.append(key, value);
		}

		createCredential(formData);
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
