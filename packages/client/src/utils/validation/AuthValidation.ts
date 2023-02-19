import * as yup from 'yup';

export const registerSchema = yup.object({
    username: yup.string().required().trim().min(4).max(10),
    email: yup.string().required().trim().email(),
    phone: yup.string().required().min(10).max(15),
    password: yup.string().required().trim().min(6),
    confirmPassword: yup.string().required().trim().min(6)
}).required();


export const loginSchema = yup.object({
    email: yup.string().required().trim().email(),
    password: yup.string().required().trim().min(6),
}).required();