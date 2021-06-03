import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";

function UpdateProfile() {
  // Redux
  const { user, info } = useSelector((state) => state.student);
  // States
  const [profile, setProfile] = useState({
    name: user.name,
    email: user.email,
    phone: info.phone,
    about: info.desc,
    city: info.city,
    country: info.country,
    company: info.company,
    school: info.school,
    hometown: info.hometown,
    language: info.language,
    gender: info.gender,
  });

  // hooks
  const history = useHistory();
  const token = window.localStorage.getItem("x-access-token");

  // Hanlders
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // profile create
    const update = await axios.post(
      `http://localhost:8081/student/update/${info.id}`,
      profile,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );

    if (update) {
      history.push(`/student/${user.id}`);
    }
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
            value={profile.country}
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
      <button onClick={(e) => submitHandler(e)}>Update Profile</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 3px 3px 35px rgba(0, 0, 0, 0.5);
  button {
    margin: 10px 0;
    padding: 10px;
    width: 30%;
  }
`;

const FormSty = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  input {
    outline: none;
    padding: 10px;
    margin: 5px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }
  p {
    margin: 5px;
  }
  .about {
    textarea {
      margin: 0px;
      height: 200px;
      width: 202px;
      max-width: 200px;
      min-width: 200px;
      outline: none;
      min-height: 200px;
      border: 1px solid lightgray;
    }
  }
`;
export default UpdateProfile;
