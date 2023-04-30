import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../components/User/IUser";

export const usersApi = createApi({
  reducerPath: "usersApi",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (build) => ({
    getUsers: build.query<IUser[], string>({
      query: (limit = "") => `users?${limit && `_limit=${limit}`}`,
      providesTags: (result) =>
        result
          ? [...result.map(({ author_id }) => ({ type: "Users" as const, author_id })), { type: "Users", author_id: "LIST" }]
          : [{ type: "Users", author_id: "LIST" }],
    }),
    addUsers: build.mutation({
      query: (body) => ({ url: "users", method: "POST", body }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
  }),
});

export const { useGetUsersQuery, useAddUsersMutation } = usersApi;
