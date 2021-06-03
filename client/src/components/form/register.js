import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router";

function Register() {
  // States
  const [checked, setChecked] = useState(false);
  const [errors, setErros] = useState({});
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // hooks
  const history = useHistory();

  // Hanlders
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { name, email, password } = user;
    // Validation
    if (name === "" && email === "" && password === "") {
      alert("Please fill out the feilds");
      return;
    } else {
      // student registration
      if (!checked) {
        await axios.post("http://localhost:8081/student", user).then((res) => {
          if (res.status === 200) {
            history.push("/login/student");
          } else {
            setErros(res.data);
            alert(errors);
          }
        });
      } else {
        axios.post("http://localhost:8081/faculty", user).then((res) => {
          if (res.status === 200) {
            history.push("/login/faculty");
          } else {
            setErros(res.data);
            alert(errors);
          }
        });
      }
    }
  };
  return (
    <Wrapper>
      <FormSty>
        <div className="name">
          <p>Name</p>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={user.name}
            onChange={inputHandler}
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
          />
        </div>
        <div className="password">
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={inputHandler}
          />
        </div>
        <div className="checkbox">
          <p>Faculty</p>
          <input
            type="checkbox"
            value={checked}
            onClick={() => setChecked(!checked)}
          />
        </div>
      </FormSty>
      <button onClick={submitHandler}>Register</button>
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
  .checkbox {
    display: flex;
    align-items: center;
    padding: 10px;
  }
`;
export default Register;
