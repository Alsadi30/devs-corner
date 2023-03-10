import * as yup from 'yup';

export const projectSchema = yup.object({
    name: yup.string().required().trim().max(20),
    description: yup.string().required().trim().max(100),
    repoUrl: yup.string().required().trim(),
    liveUrl: yup.string().required().trim(),
})