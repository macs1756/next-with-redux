import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IPost } from '../Types'

export const backend = createApi({
  reducerPath: 'shadekoApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/api/',
  }),

  endpoints: (builder) => ({

    getPosts: builder.query<IPost[], null>({
      query: () => `/post`
    }),

  })
})

export const
  {
    useGetPostsQuery
  } = backend