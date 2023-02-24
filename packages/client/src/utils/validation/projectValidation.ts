import * as yup from 'yup';

export const projectSchema = yup.object({
    name: yup.string().required().trim().max(15),
    description: yup.string().required().trim().max(40),
    repoUrl: yup.string().required().trim(),
    liveUrl: yup.string().required().trim(),
})