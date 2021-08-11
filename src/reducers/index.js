import { combineReducers } from "redux";
import categoryReducer from "./category.reducer";
import productReducer from "./product.reducer";

export const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
});
