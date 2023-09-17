import styled from "styled-components";
import { Button } from "../../components/Button/Button.jsx";

export const WrapBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  padding: 300px 0;
`;

export const RegisterButton = styled(Button)`
  padding: 12px 24px;
  width: 217px;
  color: #fffbff;
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 10px;
  border: 1px solid #5f4763;
  background: #48374d;
  cursor: pointer;
`;

export const LoginButton = styled(RegisterButton)`
  border: 1px solid #6a536d;
  background: #7b6682;
`;
