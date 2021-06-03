import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import axios from "axios";
import { FormSty, Wrapper } from "../../styles/courseStyle";

function CourseComp() {
  // React Router hooks
  const { pathname } = useLocation();
  const facultyId = pathname.split("/")[3];

  // Redux
  // States
  const [course, setCourse] = useState({
    name: "",
    courseId: "",
    dept: "",
    desc: "",
    room: "",
    waitlist: "",
    team: "",
    facId: facultyId,
  });

  // hooks
  const history = useHistory();

  // Hanlders
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // course create

    await axios
      .post("http://localhost:8081/faculty/course", course)
      .then((res) => {
        console.log(res);
        history.push(`/faculty/${facultyId}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Wrapper>
      <h4>Profile</h4>
      <FormSty>
        <div className="name">
          <p>Course Name</p>
          <input
            type="text"
            name="name"
            placeholder="History"
            value={course.name}
            onChange={inputHandler}
          />
        </div>
        <div className="courseId">
          <p>Course Id</p>
          <input
            type="number"
            name="courseId"
            placeholder="101"
            value={course.courseId}
            onChange={inputHandler}
          />
        </div>
        <div className="dept">
          <p>Course Dept</p>
          <input
            type="text"
            name="dept"
            value={course.dept}
            onChange={inputHandler}
          />
        </div>
        <div className="description">
          <p>Course Description</p>
          <textarea
            rows="4"
            cols="25"
            name="desc"
            value={course.desc}
            onChange={inputHandler}
          />
        </div>
        <div className="city">
          <p>Course Room</p>
          <input
            type="text"
            name="room"
            value={course.room}
            onChange={inputHandler}
          />
        </div>
        <div className="waitlist">
          <p>Waitlist Capacity</p>
          <input
            type="number"
            name="waitlist"
            value={course.waitlist}
            onChange={inputHandler}
          />
        </div>
        <div className="team">
          <p>Course Team</p>
          <input
            type="text"
            name="team"
            value={course.team}
            onChange={inputHandler}
          />
        </div>
      </FormSty>
      <button onClick={submitHandler}>Create Course</button>
      <button onClick={() => history.push(`/faculty/${facultyId}`)}>
        Home
      </button>
    </Wrapper>
  );
}

export default CourseComp;
