import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "../../redux";
import { changeCurrent } from "../../redux/users";
import { useDispatch } from "react-redux";
import { IUser } from "../../components/User/IUser";

const Login = () => {
  const [valueName, setValueName] = useState("");
  const [valuePassword, setValuePassword] = useState("");

  const { data = [], isLoading } = useGetUsersQuery("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const isRegistered = (user: IUser) => {
  //   return user.username === valueName;
  // };

  const handleCurrentUser = async () => {
    if (valueName && valuePassword) {
      // const result = data instanceof Array && data.filter(isRegistered);
      const result = data.find(({ username, password }) => username == valueName && password === valuePassword);
      result && sessionStorage.setItem("isCurrentUser", `${result.author_id}`);
      navigate("/chat");
    }
  };

  return (
    <div style={{ padding: "10vw", flexDirection: "column", justifyContent: "center" }} className="App-header">
      <h1 style={{ marginBottom: "2vh" }}>Login</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
        <input type="text" placeholder="input year name" value={valueName} onChange={(e) => setValueName(e.target.value)} />
        <input type="text" placeholder="input year password" value={valuePassword} onChange={(e) => setValuePassword(e.target.value)} />
        <button onClick={handleCurrentUser}>enter</button>
        <h6 onClick={() => navigate("/registration")}>Create account</h6>
      </div>
    </div>
  );
};

export default Login;
