import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    endpoints: (builder) => ({
        getTodo: builder.query({
            query: (id) => `todos`,
        })
    })
});

export const { useGetTodoQuery } = todosApi;