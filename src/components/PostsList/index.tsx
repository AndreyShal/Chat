import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useStoreDispatch } from "../../redux/store";
import { Post } from "../Post";
import { IPost } from "../Post/IPost";
import "./index.css";

interface IPostListProps {
  className?: string;
}

export const PostsList: FC<IPostListProps> = ({ className }) => {
  const dispatch = useStoreDispatch();
  // const posts = useSelector((state: RootState) => state.posts.list);

  // useEffect(() => {
  //   dispatch(getPosts());
  //   console.log(posts);
  // }, [dispatch]);

  return (
    <ul className="postsList">
      {/* {posts.map((post: IPost) => (
        <Post key={post.id} post={post} />
      ))} */}
    </ul>
  );
};
