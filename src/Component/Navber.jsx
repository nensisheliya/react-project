import React from "react";
import "../Css/Nav.css";
import { Link } from "react-router-dom";
import { Logout } from "../Redex/Action";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../Redex/Stor";

const Navbar=()=> {
  let dispatch =useDispatch();
  let data = useSelector((store)=>store.user);
  // console.log(data);
  let all=useSelector((store)=>store)
  console.log(all);

  return (
    <div id="nav">
      <Link  className="link">Entro</Link>
      <Link to="/"className="link">
        Home
      </Link>
      <Link to="/Product" className="link">
        Product
      </Link>
      <Link to="/Addproduct" className="link">
        Addproduct
      </Link>
      <Link to="/Cart" className="link">
        Cart
      </Link>
      {data.isLogin ? (
        <span className="link">{data.userData.username}</span>
      ) : (
        <Link to="/Signup" className="link">
          Signup
        </Link>
      )}
      {data.isLogin ? (
        <span className="link" onClick={() => dispatch(Logout())}>
          Logout
        </span>
      ) : (
        <Link to="/Login" className="link">
          Login
        </Link>
      )}
    </div>
  );
}

export default Navbar;
