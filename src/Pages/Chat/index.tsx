import { UsersList } from "../../components/UsersList";
import { PostsList } from "../../components/PostsList";
import { AddPost } from "../../components/AddPost";

const Chat = () => {
  return (
    <>
      <div className="App-header">
        <UsersList />
        <div>
          <PostsList />
          <AddPost />
        </div>
      </div>
    </>
  );
};

export default Chat;
