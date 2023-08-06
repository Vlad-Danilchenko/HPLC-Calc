import styled from "styled-components";
import {Button} from "../../components/Button/Button.jsx";

export const WrapBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
`;

export const RegisterButton = styled(Button)`
  padding: 12px 24px;
  width: 217px;
  color: #FFFBFF;
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 10px;
  border: 1px solid #5F4763;
  background: #48374D;
  cursor: pointer;
`;

export const LoginButton = styled(RegisterButton)`
  border: 1px solid #6A536D;
  background: #7B6682;
`;

