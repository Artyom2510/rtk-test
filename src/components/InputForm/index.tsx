import React, { forwardRef } from 'react';
import { Form, Input, Typography } from 'antd';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputFormProps = {
	field: 'username' | 'email' | 'password';
	label?: string;
	error?: string;
	placeholder?: string;
	required?: boolean;
} & Omit<UseFormRegisterReturn, 'ref'>;

const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
	({ field, required, error, label, placeholder }, ref: any) => {
		const { Text } = Typography;
		return (
			<Form.Item label={label} required={required}>
				{field !== 'password' ? (
					<Input ref={ref} placeholder={placeholder} />
				) : (
					<Input.Password
						ref={ref}
						autoComplete='off'
						placeholder={placeholder}
					/>
				)}
				{error && <Text type='danger'>{error}</Text>}
			</Form.Item>
		);
	}
);

InputForm.displayName = 'InputForm';
export default InputForm;
