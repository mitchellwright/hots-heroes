export const heroReducer = (state, action) => {
  switch (action.type) {
    case "FETCHING_HERO_START":
      return { ...state, isFetching: true };

    case "FETCHING_HERO_SUCCESS":
      return {
        ...state,
        hero: {
          name: action.payload.name,
          role: action.payload.role,
          type: action.payload.type,
          iconUrl: action.payload.icon_url["92x93"],
          abilities: action.payload.abilities,
        },
        isFetching: false,
      };

    case "FETCHING_HERO_ERROR":
      return state;

    default:
      return state;
  }
};
