import * as yup from 'yup';

export const credentialSchema = yup.object({
	title: yup.string().required().trim().max(20),
	// image: yup.string().required(),
	institution: yup.string().required().trim(),
	cartificateUrl: yup.string().trim(),
	cartificateId: yup.string().trim(),
	courseDuration: yup.string().required().trim(),
	// achivedAt: yup.date().required(),
});
