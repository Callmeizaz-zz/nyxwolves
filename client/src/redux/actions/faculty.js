import axios from "axios";

const getFaculty = (id, token) => async (dispatch) => {
  const faculty = await axios.get(`http://localhost:8081/faculty/${id}`, {
    headers: {
      "x-access-token": token,
    },
  });

  dispatch({
    type: "FETCH_FACULTY",
    payload: {
      faculty: faculty.data,
    },
  });
};
const getCourse = (id, token) => async (dispatch) => {
  const course = await axios.get(`http://localhost:8081/faculty/course/${id}`, {
    headers: {
      "x-access-token": token,
    },
  });

  dispatch({
    type: "FETCH_COURSE",
    payload: {
      course: course.data,
    },
  });
};

export { getFaculty, getCourse };
