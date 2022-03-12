import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseURI = process.env.REACT_APP_BASE_SERVER_URL;

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      //get http method by default
      query: () => process.env.REACT_APP_API_CATEGORIES,
    }),
  }),
});

export default apiSlice;
