import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../components/Post/IPost";

interface IPostState {
  list: Array<IPost>;
}

const initialState: IPostState = {
  list: [],
};
