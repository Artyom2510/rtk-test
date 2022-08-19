import * as yup from 'yup';

export const schema = yup.object().shape({
	username: yup.string().required('Username is required please !'),
	email: yup
		.string()
		.email('Please enter a valid email format !')
		.required('Email is required please !'),
	password: yup
		.string()
		.min(4, 'Password must contain at least 4 characters')
		.required('Password is required please !')
});
