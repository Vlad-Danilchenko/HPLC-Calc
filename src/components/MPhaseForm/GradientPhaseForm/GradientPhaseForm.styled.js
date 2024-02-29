import styled from "styled-components";
import { StyledLabel } from "../../WaterCounter/WaterCounter.styled";
import { FormBtn } from "../BtnForm/BtnForm.styled";

export const GradTableRow = styled.div`
  margin-bottom: 2px;
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
`;
export const GradTableInput = styled.input`
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  border-radius: 4px;
  border: 1px solid #5f4763;
  width: 100%;
  padding: 4px 1px 4px 1px;

  color: #908d90;
  background: #fbf4f4;
`;

export const GradTableLabelText = styled.p`
  color: #fffbff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125;

  margin-bottom: 4px;
`;

export const GradBtnBox = styled.div`
  text-align: center;
  padding: -4px;
  padding-top: 8px;
`;

export const GradTableBtn = styled(FormBtn)`
  font-size: 18px;
  padding: 4px;
  margin: 4px;
`;
