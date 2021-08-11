import { productConstants } from "../constants";
import axios from "../helper/axios";

export const getProductsBySlug = (slug) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/${slug}`);
      if (res.status === 200) {
        dispatch({
          type: productConstants.GET_PRODUCTS_BY_SLUG,
          payload: res.data,
        });
      } else {
        console.log("no data found");
      }
    } catch (error) {
      console.log("No Data Found");
    }
  };
};
