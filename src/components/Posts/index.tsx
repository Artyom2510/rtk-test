import React, { useEffect, useState } from 'react';
import { useFetchAllUsersQuery } from '../../services/postsServices';
import PostItem from '../PostItem';

const Posts = () => {
	const { data: posts, error, isLoading } = useFetchAllUsersQuery(10);

	return (
		<>
			{isLoading && <p>Loading...</p>}
			{error && <p>error</p>}
			{posts?.map(post => (
				<PostItem key={post.id} post={post} />
			))}
		</>
	);
};

export default Posts;
