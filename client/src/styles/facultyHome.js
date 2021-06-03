import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 20px;
    border-bottom: 2px solid lightgray;
    h4,
    h5 {
      margin-bottom: 10px;
    }
    .avatar {
      cursor: pointer;
      button {
        padding: 10px;
        margin: 4px;
      }
    }
  }
`;

export const Content = styled.div`
  margin: 10px;
  padding: 30px;
  width: 500px;
  max-width: 500px;
  border-radius: 10px;

  box-shadow: 3px 3px 35px rgba(0, 0, 0, 0.5);
  margin: 10px auto;
  .userInfo {
    display: flex;
    justify-content: space-between;
    margin: 5px;
    align-items: center;
    border-bottom: 3px solid lightgray;
  }
  .avi,
  .info {
    margin-bottom: 10px;
  }
`;

export const CourseSty = styled.div`
  display: flex;
  padding: 5px;
  margin: 5px;
  flex-direction: column;
  border: 2px solid lightgray;
  h5 {
    padding: 2px;
    font-size: 12px;
  }
`;
