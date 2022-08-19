import React from 'react';
import { useForm, Controller, Resolver, SubmitHandler } from 'react-hook-form';
import {
	Form,
	Input,
	Checkbox,
	Button,
	Row,
	Col,
	Typography,
	Space
} from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../validation';
import cn from 'classnames';
import InputForm from '../../components/InputForm';

export type FormValues = {
	username: string;
	email: string;
	password: string;
};

const Home = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormValues>({
		mode: 'onBlur',
		resolver: yupResolver(schema)
	});
	const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

	const { Text } = Typography;

	const onFinish = (values: FormValues) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Row style={{ paddingTop: '32px' }}>
			<Col span={8} offset={8}>
				<Form
					name='test'
					// initialValues={{
					// 	remember: true
					// }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete='off'
				>
					<Text
						strong
						style={{
							display: 'block',
							textAlign: 'center',
							marginBottom: '24px'
						}}
					>
						Ant Design Сrutch From
					</Text>
					<Form.Item label='Name' required>
						<Input placeholder='name' name='username' />
					</Form.Item>
					<Form.Item label='Password' required>
						<Input.Password
							autoComplete='off'
							placeholder='password'
							name='password'
						/>
					</Form.Item>
					<Form.Item label='Email' required>
						<Input placeholder='email' name='email' />
					</Form.Item>
					<Form.Item>
						<Button type='primary' htmlType='submit'>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</Col>
		</Row>
		// <Row style={{ paddingTop: '32px' }}>
		// 	<Col span={8} offset={8}>
		// 		<form onSubmit={handleSubmit(onSubmit)}>
		// 			<Text
		// 				strong
		// 				style={{
		// 					display: 'block',
		// 					textAlign: 'center',
		// 					marginBottom: '24px'
		// 				}}
		// 			>
		// 				Ant Design Сrutch From
		// 			</Text>
		// 			<InputForm
		// 				label='Name'
		// 				placeholder='name'
		// 				field='username'
		// 				error={errors?.username && errors?.username.message}
		// 				required
		// 				{...register('username')}
		// 			/>
		// 			<InputForm
		// 				label='Email'
		// 				placeholder='email'
		// 				field='email'
		// 				error={errors?.email && errors?.email.message}
		// 				required
		// 				{...register('email')}
		// 			/>
		// 			<InputForm
		// 				label='Password'
		// 				placeholder='password'
		// 				field='password'
		// 				error={errors?.password && errors?.password.message}
		// 				required
		// 				{...register('password')}
		// 			/>
		// 			<Form.Item>
		// 				<Button type='primary' htmlType='submit'>
		// 					Submit
		// 				</Button>
		// 			</Form.Item>
		// 		</form>
		// 	</Col>
		// </Row>
	);
};

export default Home;
