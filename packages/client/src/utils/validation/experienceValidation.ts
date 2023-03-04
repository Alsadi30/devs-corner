import * as yup from 'yup';

export const experienceSchema = yup.object({
    position: yup.string().required().trim().max(15),
    companyName: yup.string().trim().required(),
    startAt: yup.date().required(),
    endAt: yup.date()

})