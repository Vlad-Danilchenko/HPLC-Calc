import styled from "styled-components";

export const KeyboardBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: -5px;
`;

export const Keyboardli = styled.li`
  min-width: 100px;
  min-height: 50px;

  margin: 5px;

  justify-content: center;
  align-items: center;

  /* 
  color: #fffbff;
  font-family: Varela Round;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; 112.5% */
`;

export const KeyboardBtn = styled.button`
  padding: 12px 7px;
  width: 100%;
  height: 100%;

  border-radius: 10px;
  border: 1px solid #6a536d;
  background: #7b6682;

  color: #fffbff;
  font-family: Varela Round;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 112.5% */
`;
