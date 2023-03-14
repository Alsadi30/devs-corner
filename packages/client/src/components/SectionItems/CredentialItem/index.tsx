import { Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from '../../../../../material-ui/src/Atoms/Avatars/Image';
import KeyValue from '../../../../../material-ui/src/Atoms/KeyValue';
import CustomizedDialogs from '../../../../../material-ui/src/Atoms/Modal';
import ItemTitle from '../../../../../material-ui/src/Molecules/ItemTitleWithIcon';
import {
	useDeleteCredentialMutation,
	useUpdateCredentialMutation,
} from '../../../features/credential/credentialApi';
import CredentialModel from '../../ModalItems/CredentialModal';

export interface CredentialProps {
	item: {
		id: string;
		title: string;
		institution: string;
		image: string;
		achivedAt: number;
		courseDuration: string;
		cartificateId: string;
		cartificateUrl: string;
	};
}

const CredentialItem = ({ item }: CredentialProps) => {
	const {
		id,
		title,
		institution,
		cartificateId,
		cartificateUrl,
		image,
		achivedAt,
		courseDuration,
	} = item;
	const [credopen, setCredOpen] = useState(false);
	const [showIcon, setShowIcon] = useState(false);

	const userData = useSelector((state: any) => state?.user);

	const [deleteCredential] = useDeleteCredentialMutation();
	const [updateCredential] = useUpdateCredentialMutation();

	const handleCredential = () => {
		setCredOpen(!credopen);
	};

	const handleCredentialDelete = () => {
		let confirmed = window.confirm('Do you really want to delete it??');
		if (confirmed) {
			deleteCredential(id);
		}
	};

	const formData = new FormData();
	const handleCredSubmit = (data: object) => {
		for (const [key, value] of Object.entries(data)) {
			formData.append(key, value);
		}
		updateCredential({ id: userData?.user?.id, data });
		handleCredential();
	};

	return (
		<Grid
			onMouseOver={() => setShowIcon(true)}
			onMouseOut={() => setShowIcon(false)}
			container
			flexDirection={'column'}
			p={2}
			maxWidth={'50%'}
			pr={7}
		>
			<ItemTitle
				title={title}
				handleDelete={handleCredentialDelete}
				handleEdit={handleCredential}
				showIcon={showIcon}
			/>
			<Typography pb={0.5} variant='body1' color={'info.light'}>
				{institution}
			</Typography>
			<Image Src={image} Height='150px' Width='210px' />
			<KeyValue property='Achieved At' value={achivedAt} />
			<KeyValue property='Duration' value={courseDuration} />

			<CustomizedDialogs
				title='Update Credential'
				open={credopen}
				handleClose={handleCredential}
			>
				<CredentialModel onSubmit={handleCredSubmit} data={item} />
			</CustomizedDialogs>
		</Grid>
	);
};

export default CredentialItem;
