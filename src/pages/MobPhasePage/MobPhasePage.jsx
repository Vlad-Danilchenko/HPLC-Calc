import { useState } from "react";
import { MPhaseForm } from "../../components/MPhaseForm/MPhaseForm";
import { MPhaseResult } from "../../components/MPhaseResult/MPhaseResult";

export const MobPhasePage = () => {
  const [mobPhaseForm, setMobPhaseForm] = useState({});
  const [step, setStep] = useState("first");

  // console.log(mobPhaseForm);

  return (
    <>
      {step !== "finish" && (
        <MPhaseForm
          setStep={setStep}
          step={step}
          mobPhaseForm={mobPhaseForm}
          setMobPhaseForm={setMobPhaseForm}
        />
      )}
      {step === "finish" && (
        <MPhaseResult
          setStep={setStep}
          step={step}
          mobPhaseForm={mobPhaseForm}
          setMobPhaseForm={setMobPhaseForm}
        />
      )}
    </>
  );
};
