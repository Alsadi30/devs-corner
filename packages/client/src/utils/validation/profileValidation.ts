import * as yup from 'yup';

export const profileSchema = yup.object({
	displayname: yup.string().trim().max(20),
	bio: yup.string().trim().max(30),
	about: yup.string().trim().max(150),
	// profilePic: yup.string().trim(),
	// coverPic: yup.string().trim(),
	nationality: yup.string().trim().max(15),
	location: yup.string().trim().max(40),
	gender: yup.string().trim().max(20),
	// dateofBirth: yup.date(),
});
