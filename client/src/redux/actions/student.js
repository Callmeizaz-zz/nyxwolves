import axios from "axios";

const getStudent = (id, token) => async (dispatch) => {
  const student = await axios.get(`http://localhost:8081/student/${id}`, {
    headers: {
      "x-access-token": token,
    },
  });

  dispatch({
    type: "FETCH_STUDENT",
    payload: {
      student: student.data,
    },
  });
};
const getProfile = (id, token) => async (dispatch) => {
  const profile = await axios.get(
    `http://localhost:8081/student/profile/${id}`,
    {
      headers: {
        "x-access-token": token,
      },
    }
  );

  dispatch({
    type: "FETCH_PROFILE",
    payload: {
      profile: profile.data,
    },
  });
};

export { getStudent, getProfile };
