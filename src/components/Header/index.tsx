import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Space } from 'antd';
import { SmileFilled } from '@ant-design/icons';

const Header = () => {
	const { Header } = Layout;

	return (
		<Header>
			<Space size={24}>
				<NavLink to='/' style={{ display: 'block' }}>
					<SmileFilled style={{ display: 'block', fontSize: '32px' }} />
				</NavLink>
				<NavLink to='/posts'>Posts</NavLink>
			</Space>
		</Header>
	);
};

export default Header;
