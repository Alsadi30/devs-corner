import * as yup from 'yup';

export const educationSchema = yup.object({
	title: yup.string().required().trim().max(15),
	result: yup.number().required(),
	passingyear: yup.date().required(),
	institute: yup.string().trim().required(),
});
