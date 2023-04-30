import { FC } from "react";
import { IUser } from "./IUser";
import "./style.css";

interface IUserProps {
  user: IUser;
}

export const User: FC<IUserProps> = ({ user }) => {
  console.log(`${sessionStorage.getItem("isCurrentUser")} ${user.author_id}`);

  return (
    <li className={`${sessionStorage.getItem("isCurrentUser") === user.author_id && `currentUser`}`}>
      <img style={{ width: 100, height: 100 }} src={user?.avatar} alt="" />
      <span>{user?.username}</span>
    </li>
  );
};
