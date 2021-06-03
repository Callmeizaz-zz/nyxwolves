import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import { FormSty, Wrapper } from "../../styles/courseStyle";

function Profile() {
  // React Router hooks
  const { pathname } = useLocation();
  const studentId = pathname.split("/")[3];

  // Redux
  const { user } = useSelector((state) => state.student);
  // States
  const [profile, setProfile] = useState({
    name: user.name,
    email: user.email,
    phone: "",
    about: "",
    city: "",
    country: "",
    company: "",
    school: "",
    hometown: "",
    language: "",
    gender: "",
    id: studentId,
  });

  // hooks
  const history = useHistory();

  // Hanlders
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // profile create

    await axios
      .post("http://localhost:8081/student/profile", user)
      .then(() => {
        history.push(`/student/${studentId}`);
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
          <p>Name</p>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={user.name}
            disabled
          />
        </div>
        <div className="email">
          <p>Email</p>
          <input
            type="text"
            name="email"
            placeholder="example@doe.com"
            value={user.email}
            onChange={inputHandler}
            disabled
          />
        </div>
        <div className="phone">
          <p>Phone Number</p>
          <input
            type="number"
            name="phone"
            value={profile.phone}
            onChange={inputHandler}
          />
        </div>
        <div className="about">
          <p>About me</p>
          <textarea
            rows="4"
            cols="25"
            name="about"
            value={profile.about}
            onChange={inputHandler}
          />
        </div>
        <div className="city">
          <p>City</p>
          <input
            type="text"
            name="city"
            value={profile.city}
            onChange={inputHandler}
          />
        </div>
        <div className="country">
          <p>Country</p>
          <input
            type="text"
            name="country"
            value={profile.password}
            onChange={inputHandler}
          />
        </div>
        <div className="company">
          <p>Company</p>
          <input
            type="text"
            name="company"
            value={profile.company}
            onChange={inputHandler}
          />
        </div>
        <div className="School">
          <p>School</p>
          <input
            type="text"
            name="school"
            value={profile.school}
            onChange={inputHandler}
          />
        </div>
        <div className="hometown">
          <p>Hometown</p>
          <input
            type="text"
            name="hometown"
            value={profile.hometown}
            onChange={inputHandler}
          />
        </div>
        <div className="language">
          <p>Language</p>
          <input
            type="text"
            name="language"
            value={profile.language}
            onChange={inputHandler}
          />
        </div>
        <div className="gender">
          <p>Gender</p>
          <input
            type="text"
            name="gender"
            value={profile.gender}
            onChange={inputHandler}
          />
        </div>
      </FormSty>
      <button onClick={submitHandler}>Create Profile</button>
    </Wrapper>
  );
}

export default Profile;
