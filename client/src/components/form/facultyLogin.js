import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { FormSty, Wrapper } from "../../styles/loginStyle";

function FacultyLogin() {
  // States
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  // React Router
  const history = useHistory();
  // Handler
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setCreds({ ...creds, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // SENDING POST
    axios
      .post("http://localhost:8081/faculty/login", creds)
      .then((res) => {
        if (res) {
          if (res.data.error) {
            alert(res.data.error);
            return;
          }

          window.localStorage.setItem("x-access-token", res.data.token);
          history.push(`/faculty/${res.data.userId}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Wrapper>
      <h4>Faculty Login</h4>
      <FormSty>
        <div className="email">
          <p>Email</p>
          <input
            type="text"
            placeholder="example@doe.com"
            value={creds.email}
            name="email"
            onChange={inputHandler}
          />
        </div>
        <div className="password">
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={creds.password}
            onChange={inputHandler}
          />
        </div>
      </FormSty>
      <button onClick={handleSubmit}>Login</button>
    </Wrapper>
  );
}

export default FacultyLogin;
