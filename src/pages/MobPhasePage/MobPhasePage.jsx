import { useState } from "react";
import { MPhaseForm } from "../../components/MPhaseForm/MPhaseForm";
import { IsoCalculation } from "../../components/MPhaseForm/IsoCalculation/IsoCalculation";

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
        <IsoCalculation
          setStep={setStep}
          step={step}
          mobPhaseForm={mobPhaseForm}
          setMobPhaseForm={setMobPhaseForm}
        />
      )}
    </>
  );
};
