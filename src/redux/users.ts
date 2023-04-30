import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../components/User/IUser";

interface IUsersState {
  current: IUser;
  list: Array<IUser>;
}

const initialCurrent: IUser = {
  id: 0,
  author_id: "",
  username: "",
  password: "",
  avatar: "",
};

const initialState: IUsersState = {
  current: initialCurrent,
  list: [],
};

const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    changeCurrent: (state, action) => {
      state.current = state.list.find(({ author_id }) => author_id === action.payload) || initialCurrent;
    },
  },
});

export const { changeCurrent } = counterSlice.actions;
export default counterSlice.reducer;
