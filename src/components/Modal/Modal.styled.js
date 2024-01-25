import styled from "styled-components";

export const Backdrop = styled.div`
  /* position:absolute ;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
opacity: 0.6;
pointer-events: none;
background-color:#32149d; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const BodyModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  padding: 20px 16px;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  width: 340px;
  /* height: 400px; */

  gap: 24px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #47364c;
  background: #1e0326;
  /* background-color: #47364c; */
  /* background: linear-gradient(180deg, #190122 0%, #300241 51.84%, #110415 100%); */
  /* color: #fffbff; */
`;
