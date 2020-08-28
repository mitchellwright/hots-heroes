import axios from "axios";

export const getHero = (hero) => {
  return (dispatch, getState) => {
    dispatch({ type: "FETCHING_HERO_START" });
    console.log(hero);
    axios
      .get(`https://hotsapi.net/api/v1/heroes/${hero}`)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "FETCHING_HERO_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "FETCHING_HERO_ERROR",
          payload: { err },
        });
      });
  };
};
