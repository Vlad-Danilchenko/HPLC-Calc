import { BtnForm } from "../MPhaseForm/BtnForm/BtnForm";
import { MPhContainer } from "../MPhaseForm/MPhaseForm.styled";
import { GradCalculation } from "./GradCalculation/GradCalculation";
import { IsoCalculation } from "./IsoCalculation/IsoCalculation";

export const MPhaseResult = ({
  mobPhaseForm,
  setMobPhaseForm,
  step,
  setStep,
}) => {
  return (
    <>
      <MPhContainer>
        {mobPhaseForm.typeOfFlow === "isocratic" && (
          <IsoCalculation
            setStep={setStep}
            step={step}
            mobPhaseForm={mobPhaseForm}
            setMobPhaseForm={setMobPhaseForm}
          />
        )}
        {mobPhaseForm.typeOfFlow === "gradient" && (
          <GradCalculation
            setStep={setStep}
            step={step}
            mobPhaseForm={mobPhaseForm}
            setMobPhaseForm={setMobPhaseForm}
          />
        )}
        <BtnForm step={step} setStep={setStep} />
      </MPhContainer>
    </>
  );
};
