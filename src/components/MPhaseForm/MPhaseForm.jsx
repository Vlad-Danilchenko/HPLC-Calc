import { useState } from "react";
import { FirstStepForm } from "./FirstStepForm/FirstStepForm";
import { MPhContainer } from "./MPhaseForm.styled";
import { SecondStepForm } from "./SecondStepForm/SecondStepForm";

export const MPhaseForm = ({
  step,
  setStep,
  mobPhaseForm,
  setMobPhaseForm,
}) => {
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

      {step === "second" && (
        <SecondStepForm
          setStep={setStep}
          step={step}
          mobPhaseForm={mobPhaseForm}
          setMobPhaseForm={setMobPhaseForm}
        />
      )}
    </MPhContainer>
  );
};
