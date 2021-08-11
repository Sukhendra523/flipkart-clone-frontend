import { categoryConstansts } from "../constants";

const initialState = {
  categories: [],
  error: false,
  loading: false,
};

export default (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case categoryConstansts.GET_ALL_CATEGORIES_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case categoryConstansts.GET_ALL_CATEGORIES_SUCCESS:
      state = {
        ...state,
        loading: false,
        categories: action.payload.categories,
      };
      break;
    case categoryConstansts.GET_ALL_CATEGORIES_FAILURE:
      state = {
        ...initialState,
        error: action.payload.error,
      };
      break;
  }
  return state;
};
