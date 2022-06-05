import styled from "styled-components";

export const Container = styled.div`
  background-color: #111011;
  height: 100vh;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;

  button {
    margin: 0 auto;
    padding: 10px 20px;
    outline: none;
    cursor: pointer;
    background-color: #35a344;
    border: none;
    color: #1c1c1c;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 10px;
  }

  .login-msg {
    margin: auto;
    text-align: center;

    h2 {
      color: white;
      font-size: 3rem;
    }
  
    a {
      display: block;
      color: #62b16d;
      font-size: 2rem;
      text-decoration: none;
      background-color: #1d1d1d;
      padding: 10px 20px;
      margin-top: 20px;
      border-radius: 10px;
      font-weight: bold;

      :hover {
        opacity: .8;
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  color: #79B473
`;

export const UserName = styled.div`
  font-size: 1.8rem;
`;

export const TasksInfo = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: cneter;

  p {
    font-size: 1.5rem;
    font-weight: bold;
  }

  p:nth-child(1) {
    color: white;
  }

  p:nth-child(2) {
    color: #43894c;
  }

  p:nth-child(3) {
    color: #b7ae00;
  }

  @media (min-width: 720px) {
    flex-direction: row;

    p {
      margin-left: 10px;
    }
  }
`;

export const TaskInputArea = styled.div`
  align-self: center;
  background-color: #212121;
  width: 80%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

export const Input = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 15px 10px;
  font-size: 1.7rem;
  color: lightgray;
`;

export const Icon = styled.div`
  margin: 0 5px;
  color: white;
  cursor: pointer;
`;

export const TasksContentArea = styled.div`
  align-self: center;
  padding: 10px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`

export const TaskArea = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  color: lightgray;
  align-items: center;
  margin: 5px 0;
`

export const DoneButton = styled.input`
`;

type TaskTextType = {
  done: boolean;
}

export const TaskText = styled.p<TaskTextType>`
  flex: 1;
  overflow: hidden;
  word-break: break-all;
  background-color: ${props => props.done? 'rgba(97, 170, 107, .2)' : 'rgba(0, 0, 0, .7)'};
  padding: 10px;
  margin: 0 10px;
  border-radius: 10px;
  font-size: 1.4rem;
  text-decoration: ${props => props.done? 'line-through' : 'none'};
`;

export const TaskButtons = styled.div`
  display: flex;

  p {
    font-size: 1.5rem;
    cursor: pointer;
  }

  p:nth-child(2) {
    margin-left: 10px;
  }
`;

