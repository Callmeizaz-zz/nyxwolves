import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getStudent, getProfile } from "../redux/actions/student";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { Content, CourseSty, Wrapper } from "../styles/facultyHome";

function StudentComp() {
  // React Router hooks
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const studentId = pathname.split("/")[2];

  //  Redux
  const { user, info } = useSelector((state) => state.student);
  const { course } = useSelector((state) => state.faculty);

  // hooks
  const history = useHistory();
  const token = window.localStorage.getItem("x-access-token");

  useEffect(() => {
    dispatch(getStudent(studentId, token));
    dispatch(getProfile(studentId, token));
  }, [studentId, token, dispatch]);

  // Hanlder
  const logoutHandler = () => {
    window.localStorage.removeItem("x-access-token");
    history.push("/");
  };
  return (
    <Wrapper>
      <div className="title">
        <div className="username">
          <h4>{user ? user.name : "Student Name"}</h4>
        </div>
        <div className="avatar">
          {user ? <button onClick={logoutHandler}>Signout</button> : ""}
          {info.id ? (
            <button
              alt="profile"
              onClick={() => history.push(`/profile/update/${info.id}`)}
            >
              Update Profile
            </button>
          ) : (
            <button onClick={() => history.push(`/student/profile/${user.id}`)}>
              Create Profile
            </button>
          )}
        </div>
      </div>
      {/* Will retrieve all the courses */}
      <Content>
        <div className="userInfo">
          <div className="info">
            <h4>{info.name}</h4>
            <p>{info.email}</p>
          </div>
          <div className="avi">
            <Avatar img={info.image} />
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

export default StudentComp;
