import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IPost } from '../Types'

export const backend = createApi({
  reducerPath: 'backendApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/post',
  }),

  endpoints: (builder) => ({

    getPosts: builder.query<IPost[], null>({
      query: () => ``
    }),

  })
})

export const
  {
    useGetPostsQuery
  } = backend