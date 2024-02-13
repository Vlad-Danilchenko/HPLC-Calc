import {
  BackIconBtn,
  BtnBack,
  BtnBox,
  BtnNext,
  NextIconBtn,
} from "./BtnForm.styled";

export const BtnForm = ({ step, setStep }) => {
  const handleBack = () => {
    switch (step) {
      case "first":
        break;
      case "second":
        setStep("first");
        break;
      case "third":
        setStep("second");
        break;

      default:
        setStep("first");
        break;
    }
  };
  return (
    <BtnBox>
      <BtnNext type="submit">
        <NextIconBtn />
      </BtnNext>
      {step !== "first" && (
        <BtnBack type="button" onClick={handleBack}>
          <BackIconBtn />
        </BtnBack>
      )}
    </BtnBox>
  );
};
