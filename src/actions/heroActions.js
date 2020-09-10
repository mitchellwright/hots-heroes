import axios from "axios";

export const getHero = (hero) => {
  return (dispatch, getState) => {
    dispatch({ type: "FETCHING_HERO_START" });
    axios
      .get(`https://hotsapi.net/api/v1/heroes/${hero}`)
      .then((res) => {
        dispatch({ type: "FETCHING_HERO_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: "FETCHING_HERO_ERROR",
          payload: { err },
        });
      });
  };
};
