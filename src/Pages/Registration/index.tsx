import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddUsersMutation } from "../../redux";

const Registration = () => {
  const [valueName, setValueName] = useState("");
  const [valuePassword, setValuePassword] = useState("");

  const [addUser, { isError }] = useAddUsersMutation();

  const navigate = useNavigate();

  const handleAddUser = async () => {
    if (valueName && valuePassword) {
      await addUser({ author_id: crypto.randomUUID(), username: valueName, password: valuePassword }).unwrap();
      navigate("/chat");
    }
  };

  return (
    <div style={{ padding: "10vw", flexDirection: "column", justifyContent: "center" }} className="App-header">
      <h1 style={{ marginBottom: "2vh" }}>Registration</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
        <input type="text" placeholder="input year name" value={valueName} onChange={(e) => setValueName(e.target.value)} />
        <input type="text" placeholder="input year password" value={valuePassword} onChange={(e) => setValuePassword(e.target.value)} />
        <button onClick={handleAddUser}>enter</button>
      </div>
    </div>
  );
};

export default Registration;
