import styled from "styled-components";
import { Button } from "../Button/Button";

export const Text = styled.p`
  color: #908d90;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125;
`;

export const StyledLabel = styled.label`
  color: #908d90;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125;
`;

export const StyledInput = styled.input`
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

export const FormBtn = styled(Button)`
  padding: 12px 24px;
  width: 217px;
  color: #fffbff;
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 10px;
  border: 1px solid #6a536d;
  background: #7b6682;
  cursor: pointer;
`;

export const ResultText = styled.p`
  color: orange;
  margin-top: 16px;

  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
`;
