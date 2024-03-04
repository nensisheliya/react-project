import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../Redex/Action";
import { Emailsignup, GoogleAuth } from "../Config";
import { addDoc, collection } from "firebase/firestore";


const Signup = () => {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let dispatch = useDispatch();
  const handleSignup = async (userdata) => {
    let user = await axios.post("http://localhost:8090/user", userdata);
    console.log(user.data);
    dispatch(signup(user.data));
  };

  const handleGoogleAuth = () => {
    // GoogleAuth
    // GoogleAuth().then((data)=>{
    //   console.log(data);
    // });

    // signup
    Emailsignup("email@gmail.com","password").then((data)=>{
      console.log(data);
    });

     // email Login

    //  EmailLogin("email@gmail.com","password").then((data)=>{
    //   console.log(data);
    //  })
  };
    
//   const handleUser =async()=>{
//  let dbs = collection("users");

//  let user ={
//   email:"email@gmail.com",
//   password:"46462",
//  };
//  await addDoc(dbs,user);
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      username: username,
      email: email,
      password: password,
    };
    handleSignup(user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
      <button onClick={handleGoogleAuth
      }>Google</button>
    </div>
  );
};

export default Signup;
