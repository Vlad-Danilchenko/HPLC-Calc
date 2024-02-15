import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { KeyboardBtn } from "../../CustomKeyboard/CustomKeyboard.styled";

export const BtnBox = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

export const FormBtn = styled(KeyboardBtn)`
  width: 75px;
`;

export const BtnNext = styled(FormBtn)`
  color: orange;
`;

export const NextIconBtn = styled(FiArrowRight)`
  width: 24px;
  height: 24px;
  margin-left: 12px;
  text-align: center;
`;
export const BtnBack = styled(FormBtn)``;

export const BackIconBtn = styled(FiArrowLeft)`
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 1.4;
  margin-right: 12px;
  align-items: center;
  letter-spacing: 0.04em;
  color: #54adff;
`;
