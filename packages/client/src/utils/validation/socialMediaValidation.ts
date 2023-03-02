import * as yup from 'yup';

export const socialMediaSchema = yup.object({
    url: yup.string().required().trim(),
    type: yup.string().required().trim()
})