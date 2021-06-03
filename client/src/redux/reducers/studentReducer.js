const initState = {
  user: [],
  info: [],
};

export const StudentReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_STUDENT": {
      return {
        ...state,
        user: action.payload.student,
      };
    }
    case "FETCH_PROFILE": {
      return {
        ...state,
        info: action.payload.profile,
      };
    }
    default:
      return { ...state };
  }
};
