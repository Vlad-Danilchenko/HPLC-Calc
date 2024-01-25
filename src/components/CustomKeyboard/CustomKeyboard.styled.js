import styled from "styled-components";

export const KeyboardInput = styled.div`
  color: #fffbff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;

  border-radius: 10px;
  border: 1px solid #5f4763;
  background: #47364c;
  width: 100%;
  padding: 1px 8px 1px 16px;
  height: 50px;
`;
export const KeyboardBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: -5px;
  margin-top: 16px;
`;

export const Keyboardli = styled.li`
  min-width: 90px;
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
