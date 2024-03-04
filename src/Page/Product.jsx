import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Getproduct } from '../Redex/Action';
import { store } from '../Redex/Stor';
import { Link } from 'react-router-dom';

const Product = () => {
let  {product}  = useSelector((store)=> store.product);
let dispatch = useDispatch();
useEffect(()=>{
  if(product.length == 0){
    dispatch(Getproduct());
    console.log("called");
  }
},[]);
 return (
    <div>
      {product.map((ele)=>{
        return(
          <Link to={`/product/${ele.id}`}>
          <img src={ele.img}></img>
          <p>{ele.title}</p>
          <p>{ele.price}</p>
          </Link>
        );
      })

      }
    </div>
  );
};

export default Product;
