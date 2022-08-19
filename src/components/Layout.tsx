import React, { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router';
import { Row, Col, Layout as LayoutAntd } from 'antd';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
	const root = document.querySelector('.root') as HTMLDivElement;
	const location = useLocation();

	useEffect(() => {
		root?.scrollTo(0, 0);
	}, [location]);

	const { Content } = LayoutAntd;

	return (
		<LayoutAntd>
			<Header />
			<Content>
				<Outlet />
			</Content>
			<Footer />
		</LayoutAntd>
	);
};

export default Layout;
