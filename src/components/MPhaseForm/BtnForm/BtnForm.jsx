import {
  BackIconBtn,
  BtnBack,
  BtnBox,
  BtnNext,
  NextIconBtn,
} from "./BtnForm.styled";

export const BtnForm = ({ step }) => {
  return (
    <BtnBox>
      <BtnNext type="submit">
        <NextIconBtn />
      </BtnNext>
      {step !== "first" && (
        <BtnBack type="button">
          <BackIconBtn />
        </BtnBack>
      )}
    </BtnBox>
  );
};
