import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState, useStoreDispatch } from "../../redux/store";
import { IPost } from "../Post/IPost";
import "./index.css";

interface IPostProps {
  post: IPost;
}

export const Post: FC<IPostProps> = ({ post }) => {
  const user = useSelector((state: RootState) => state.users.current);
  return (
    <li onClick={() => console.log(post.author_id)} className={`postItem ${user.author_id === post.author_id && "postItemCurrent"}`}>
      {post.text}
    </li>
  );
};
