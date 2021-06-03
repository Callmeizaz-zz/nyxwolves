const initState = {
  user: [],
  course: [],
};

export const FacultyReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_FACULTY": {
      return {
        ...state,
        user: action.payload.faculty,
      };
    }
    case "FETCH_COURSE": {
      return {
        ...state,
        course: action.payload.course,
      };
    }
    default:
      return { ...state };
  }
};
