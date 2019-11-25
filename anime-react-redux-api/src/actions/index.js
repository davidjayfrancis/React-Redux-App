import axios from "axios";

export const FETCH_CHAR_DATA = "FETCH_CHAR_DATA";
export const FETCH_CHAR_DATA_FAIL = "FETCH_CHAR_DATA_FAIL";
export const FETCH_CHAR_DATA_SUCCESS = "FETCH_CHAR_DATA_SUCCESS";

export const getCharacters = () => dispatch => {
  dispatch({ type: FETCH_CHAR_DATA });
  axios
    .get("https://api.jikan.moe/v3/anime/223/characters_staff")
    .then(res =>
      dispatch({
        type: FETCH_CHAR_DATA_SUCCESS,
        payload: res.data.characters
      })
    )
    .catch(err => dispatch({ type: FETCH_CHAR_DATA_FAIL, payload: err }));
};
