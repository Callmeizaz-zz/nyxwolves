import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function HomeComp() {
  // Router

  return (
    <Wrapper>
      <div className="title">
        <h2>School Management</h2>
      </div>
      <StyledBtn>
        <div className="student__login">
          <h4>Login</h4>
          <Link to="/login/student">
            <button>Student Login</button>
          </Link>
          <Link to="/login/faculty">
            <button>Faculty Login</button>
          </Link>
        </div>
        <div className="register">
          <h4>Register</h4>
          <Link to="/register/">
            <button>Register</button>
          </Link>
        </div>
      </StyledBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin: 50px auto;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 50vw;
  box-shadow: 3px 3px 35px rgba(0, 0, 0, 0.5);
  .title {
    margin-bottom: 20px;
    h2 {
      font-size: 30px;
      font-weight: 700;
    }
  }
`;

const StyledBtn = styled.div`
  button {
    background-color: #1b1b1b;
    padding: 10px;
    margin: 10px;
    font-size: 1.5rem;
    &:hover {
      background-color: #23d997;
      color: black;
    }
  }
`;
export default HomeComp;
