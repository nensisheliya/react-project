
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../Redex/Action";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let dispatch = useDispatch();
  const handleLogin = async (email, password) => {
    let user = await axios.get(
      `http://localhost:8090/user?email=${email}&password=${password}`
    );
    console.log(...user.data);
    dispatch(signup(user.data));
    dispatch(Login(...user.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin(email,password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
