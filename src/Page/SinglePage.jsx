import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart, singleproduct } from "../Redex/Action";

const SinglePage = () => {
  let { id } = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleproduct(id));
  }, []);
  let data = useSelector((store) => store.product);

  const handleCart = () => {
    dispatch(
      addCart({
        img: data.single_product.img,
        title: data.single_product.title,
        price: data.single_product.price,
      })
    );
  };
  return (
    <div>
      <img src={data.single_product.img} alt="" />
      <p>{data.single_product.title}</p>
      <p>{data.single_product.price}</p>
      <button onClick={handleCart}>ADD TO CART</button>
      <button onClick={handleCart}>ROMOVE</button>
      <button onClick={handleCart}>UPDATE</button>
    </div>
  );
};

export default SinglePage;
