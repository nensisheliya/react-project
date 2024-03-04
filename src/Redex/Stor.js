import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { User } from "./Reducers/User";
import { Product} from "./Reducers/Product";
import { thunk } from "redux-thunk";


let combine = combineReducers({
  user:User,
  product:Product
});

export const store = legacy_createStore
(
  combine,
  applyMiddleware(thunk)  
);
