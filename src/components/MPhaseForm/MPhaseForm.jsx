import { useState } from "react";
import { FirstStepForm } from "./FirstStepForm/FirstStepForm";
import { MPhContainer } from "./MPhaseForm.styled";

export const MPhaseForm = ({ mobPhaseForm, setMobPhaseForm }) => {
  const [step, setStep] = useState("first");
  return (
    <MPhContainer>
      {step === "first" && (
        <FirstStepForm
          setStep={setStep}
          step={step}
          mobPhaseForm={mobPhaseForm}
          setMobPhaseForm={setMobPhaseForm}
        />
      )}
    </MPhContainer>
  );
};