import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BackgroundHolder = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  height: 70px;
`;
export const FirstChoice = styled.button`
  background-color: white;
  width: 100px;
  height: 70px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  outline: none;
  border: 0;
  cursor: pointer;
  box-shadow: 0 5px 7px -7px rgba(0, 0, 0, 0.75);
`;
export const SecondChoice = styled.button`
  background-color: white;
  width: 100px;
  height: 70px;
  align-items: center;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  outline: none;
  border: 0;
  cursor: pointer;
  box-shadow: 0 5px 7px -7px rgba(0, 0, 0, 0.75);
`;
