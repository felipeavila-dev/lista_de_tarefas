import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: #70A37F;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #3f3f3f;
  font-weight: bolder;

  button {
    align-self: center;
    background-color: #4C3957;
    border: 0;
    border-radius: 5px;
    font-weight: bold;
    font-size: 1.8rem;
    padding: 20px 30px;
    width: auto;
    color: white;
    margin-top: 10px;

    &:hover {
      opacity: .9;
      cursor: pointer;
    }
  }
`;

export const Input = styled.input`
  margin-top: 10px;
  border: 0;
  border-radius: 5px;
  font-size: 1.8rem;
  padding: 15px 25px;
  outline: none;
  color: #3f3f3f;
`

export const AlertMsg = styled.p`
  color: red;
  font-size: 1.4rem;
  font-weight: 400;
  margin: 10px 0;
`;