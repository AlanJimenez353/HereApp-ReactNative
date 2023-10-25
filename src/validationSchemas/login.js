import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required('Email is required'),
    password: yup
        .string()
        .min(5,'too short!')
        .max(100,'too Logn!')
        .required('Password is required')
})