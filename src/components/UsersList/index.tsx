import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useStoreDispatch } from "../../redux/store";
import { User } from "../User";
import { useGetUsersQuery } from "../../redux";

import { IUser } from "../../components/User/IUser";
import "./index.css";

interface IUserListProps {
  className?: string;
}

export const UsersList: FC<IUserListProps> = ({ className }) => {
  // const dispatch = useStoreDispatch();
  const users = useSelector((state: RootState) => state.users.list);
  const { data = [], isLoading } = useGetUsersQuery("");

  return (
    <ul className="usersList">
      {data.map((user: IUser) => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  );
};
