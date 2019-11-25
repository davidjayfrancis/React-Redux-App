import {
  FETCH_CHAR_DATA,
  FETCH_CHAR_DATA_FAIL,
  FETCH_CHAR_DATA_SUCCESS
} from "../actions";

const initialState = {
  characters: [],
  isLoading: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAR_DATA:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_CHAR_DATA_SUCCESS:
      return {
        ...state,
        characters: action.payload.map(char => {
          return { name: char.name, img: char.image_url };
        }),
        error: ""
      };
    case FETCH_CHAR_DATA_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
