import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../models/post';

export const postsApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com'
	}),
	endpoints: builder => ({
		fetchAllUsers: builder.query<Post[], number>({
			query: (limit: number = 5) => ({
				url: '/posts',
				params: {
					_limit: limit
				}
			})
		})
	})
});

export const { useFetchAllUsersQuery } = postsApi;
