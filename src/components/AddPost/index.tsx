import { useState } from "react";
import { Send } from "./assets/icon";
import "./index.css";

export const AddPost = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="addPost">
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <div className="addPostSend">
        <Send />
      </div>
    </div>
  );
};
