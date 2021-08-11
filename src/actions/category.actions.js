import { categoryConstansts } from "../constants";
import axios from "../helper/axios";

export const getAllCategory = () => {
  return async (dispatch) => {
    dispatch({ type: categoryConstansts.GET_ALL_CATEGORIES_REQUEST });
    try {
      const res = await axios.get("category/getCategories");
      const { categoryList } = res.data;
      if (res.status === 200) {
        dispatch({
          type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
          payload: { categories: categoryList },
        });
      }
    } catch (error) {
      dispatch({
        type: categoryConstansts.GET_ALL_CATEGORIES_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
};
