import React, { FC } from 'react';
import { Post } from '../../models/post';
import { Button } from 'antd';

type PostProps = {
	post: Post;
};

const PostItem: FC<PostProps> = ({ post }) => {
	return (
		<div>
			<p>{post.title}</p>
			<p>{post.body}</p>
			<Button type='primary' onClick={() => console.log(post.id)}>
				Id
			</Button>
		</div>
	);
};

export default PostItem;
