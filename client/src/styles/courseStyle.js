import styled from "styled-components";

export const Wrapper = styled.div`
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

export const FormSty = styled.form`
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
