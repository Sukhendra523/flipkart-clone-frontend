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


export const getProductPage = (query) => {
  return async dispatch => {
      try {
          const { cid, type } = query;
          const res = await axios.get(`/page/${cid}/${type}`);
          dispatch({ type: productConstants.GET_PRODUCT_PAGE_REQUEST });
          if (res.status === 200) {
              const { page } = res.data;
              dispatch({
                  type: productConstants.GET_PRODUCT_PAGE_SUCCESS,
                  payload: { page }
              });
          } else {
              const { error } = res.data;
              dispatch({
                  type: productConstants.GET_PRODUCT_PAGE_FAILURE,
                  payload: { error }
              });
          }
      } catch(error) {
          console.log(error)
      }

  }
}