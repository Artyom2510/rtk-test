import React from 'react';
import { useRoutes } from 'react-router';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import PostsPage from '../pages/PostsPage';

const Routes = () => {
	const routes = useRoutes([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '',
					element: <Home />,
					index: true
				},
				{ path: 'posts', element: <PostsPage /> },
				{ path: '*', element: <NotFound /> }
			]
		}
	]);
	return routes;
};

export default Routes;
