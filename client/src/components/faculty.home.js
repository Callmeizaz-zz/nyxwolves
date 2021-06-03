import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import { getFaculty, getCourse } from "../redux/actions/faculty";
import { Content, CourseSty, Wrapper } from "../styles/facultyHome";

function FacultyComp() {
  // React Router hooks
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const facultyId = pathname.split("/")[2];

  //  Redux
  const { user, course } = useSelector((state) => state.faculty);

  // hooks
  const history = useHistory();
  const token = window.localStorage.getItem("x-access-token");

  useEffect(() => {
    dispatch(getFaculty(facultyId, token));
    dispatch(getCourse(facultyId, token));
  }, [facultyId, token, dispatch]);

  // Hanlder
  const logoutHandler = () => {
    window.localStorage.removeItem("x-access-token");
    history.push("/");
  };
  return (
    <Wrapper>
      <div className="title">
        <div className="username">
          <h4>{user ? user.name : "Faculty Name"}</h4>
        </div>
        <div className="avatar">
          {user ? <button onClick={logoutHandler}>Signout</button> : ""}
          {course.id ? (
            ""
          ) : (
            <button onClick={() => history.push(`/faculty/course/${user.id}`)}>
              Create Course
            </button>
          )}
        </div>
      </div>
      {/* Will retrieve all the courses */}
      <Content>
        <div className="userInfo">
          <div className="info">
            <h4>{user.name}</h4>
            <p>{user.email}</p>
          </div>
          <div className="avi">
            <Avatar img={user.image} />
          </div>
        </div>
        {course.length
          ? course.map((items) => (
              <CourseSty>
                <h4>{items.name}</h4>
                <h5>Course Id: {items.courseId}</h5>
                <h5>Department: {items.dept}</h5>
                <h5>Description: {items.desc}</h5>
                <h5>Room: {items.room}</h5>
                <h5>Waitlist: {items.waitlist}</h5>
                <h5>Team: {items.team}</h5>
              </CourseSty>
            ))
          : ""}
      </Content>
    </Wrapper>
  );
}

export default FacultyComp;
