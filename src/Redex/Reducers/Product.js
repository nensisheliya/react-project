import { ADD_CART, ADD_PRODUCT, GET_CART, GET_PRODUCT, REMOVE_PRODUCT, SINGLE_PRODUCT, UPDATE_PRODUCT } from "../Actiontype";

let initialState = {
  product: [],
  single_product:{},
  cart:[],
  isLoding: true,
};

export const Product = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        product: [...state.product, payload],
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
      };
    case SINGLE_PRODUCT:
      return {
        ...state,
        single_product: payload,
      };
      case ADD_CART:
        return {
          ...state,
          cart: [...state.cart, payload],
        };
  
      case GET_CART:
        return {
          ...state,
          cart: payload,
        };
  
  
        case REMOVE_PRODUCT:
          return {
            ...state,
            cart:state.cart.filter((ele)=>ele.id !==payload)
          }
          case UPDATE_PRODUCT:
          return {
            ...state,
            cart:state.cart.filter((ele)=>ele.id !==payload)
          }
    default:
      return state;
  }
};
