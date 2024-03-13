import { useEffect, useState } from "react";
import { ResultText } from "./IsoCalculation.styled";
import { MPhContainer } from "../../MPhaseForm/MPhaseForm.styled";
import { BtnForm } from "../../MPhaseForm/BtnForm/BtnForm";

export const IsoCalculation = ({
  mobPhaseForm,
  setMobPhaseForm,
  step,
  setStep,
}) => {
  const [result, setResult] = useState(0);

  let firsRender = true;
  const {
    exponent,
    flow,
    numberOfLongRS,
    numberOfSeries,
    numberOfShortRS,
    timeOfAssay,
    timeOfLongRS,
    timeOfShortRS,
    timeOfTS,
    typeOfFlow,
  } = mobPhaseForm;

  const impRs = 3;
  const rs = 5;
  const assayTs = 6;
  const ts = 2;
  const realTime = timeOfAssay + 1.5;
  const realShortTime = timeOfShortRS + 1.5;
  const realLongTime = timeOfLongRS + 1.5;
  const realImpTime = timeOfTS + 1.5;

  useEffect(() => {
    firsRender = !firsRender;
    if (firsRender) {
      return;
    }
    if (exponent.includes("assay")) {
      const sum = rs * 2 + assayTs * numberOfSeries;
      const phaseForAssay = sum * realTime * flow;
      setResult((prev) => prev + phaseForAssay);
    }
    if (exponent.includes("dissolution")) {
      const sum = rs + ts * 6 * numberOfSeries;
      const phaseForDiss = sum * realTime * flow;
      setResult((prev) => prev + phaseForDiss);
    }
    if (exponent.includes("uniformity")) {
      const sum = rs + ts * 10 * numberOfSeries;
      const phaseForUniformity = sum * realTime * flow;
      setResult((prev) => prev + phaseForUniformity);
    }
    if (exponent.includes("impurity")) {
      const numberOfShortInj = numberOfShortRS * impRs;
      const phaseForShort = numberOfShortInj * realShortTime * flow;

      const numberOfLongInj = numberOfLongRS * impRs;
      const phaseForLong = numberOfLongInj * realLongTime * flow;

      const phaseForImpTs = realImpTime * ts * numberOfSeries * flow;

      const phaseForImp = phaseForImpTs + phaseForLong + phaseForShort;
      setResult((prev) => prev + phaseForImp);
    }
  }, []);

  return (
    <>
      <ResultText>
        Мінімальна к-сть фази для експерименту: {result} мл.
      </ResultText>
      {/* <BtnForm step={step} setStep={setStep} /> */}
    </>
  );
};
