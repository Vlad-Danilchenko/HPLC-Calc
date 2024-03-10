import { useEffect, useState } from "react";
import { ResultText } from "../IsoCalculation/IsoCalculation.styled";

export const GradCalculation = ({
  mobPhaseForm,
  setMobPhaseForm,
  step,
  setStep,
}) => {
  const [result, setResult] = useState(0);

  const [totalInj, setTotalInj] = useState(0);
  const [mobPhase, setMobPhase] = useState({ a: 0, b: 0, c: 0, d: 0 });

  let firsRender = true;
  const {
    a,
    b,
    c,
    d,
    time,
    idKey,
    exponent,
    flow,
    numberOfLongRS,
    numberOfSeries,
    numberOfShortRS,
    numberOfImpRS,
  } = mobPhaseForm;
  useEffect(() => {
    console.log(mobPhaseForm);
  }, [mobPhaseForm]);

  const impRs = 3;
  const rs = 5;
  const assayTs = 6;
  const ts = 2;

  useEffect(() => {
    firsRender = !firsRender;
    if (firsRender) {
      return;
    }
    if (exponent.includes("assay")) {
      const assayInj = rs * 2 + assayTs * numberOfSeries;
      setTotalInj((prev) => prev + assayInj);
    }
    if (exponent.includes("dissolution")) {
      const dissInj = rs + ts * 6 * numberOfSeries;
      setTotalInj((prev) => prev + dissInj);
    }
    if (exponent.includes("uniformity")) {
      const unifInj = rs + ts * 10 * numberOfSeries;
      setTotalInj((prev) => prev + unifInj);
    }
    if (exponent.includes("impurity")) {
      const impInj = impRs * numberOfImpRS + 2 + ts * numberOfSeries;
      setTotalInj((prev) => prev + impInj);
    }
  }, []);

  const totalPH = (channel, item) => {
    let acArg = 0;
    for (let i = 0; i < idKey.length; i += 1) {
      let areaOfTriangle = 0;
      let areaOfRectangle = 0;
      if (a[i + 1]) {
        areaOfTriangle =
          Math.abs((channel[i] - channel[i + 1]) * (time[i] - time[i + 1])) /
          2 /
          100;

        if (channel[i] <= channel[i + 1]) {
          areaOfRectangle =
            Math.abs(channel[i] * (time[i] - time[i + 1])) / 100;
        } else {
          areaOfRectangle =
            Math.abs(channel[i + 1] * (time[i] - time[i + 1])) / 100;
        }
      }
      const sumOfFig = areaOfRectangle + areaOfTriangle;
      acArg += sumOfFig;
      console.log(acArg);
    }
    const totalPhase = acArg * totalInj;
    setMobPhase((prev) => ({ ...prev, [item]: totalPhase }));
  };
  useEffect(() => {
    //  firsRender = !firsRender;
    //  if (firsRender) {
    //    return;
    //  }
    totalPH(a, "a");
    totalPH(b, "b");
    totalPH(c, "c");
    totalPH(d, "d");
  }, [totalInj]);
  return (
    <>
      <ResultText> сумарна к - сть Injection: {totalInj}</ResultText>
      <ResultText> сумарна к - сть РФ А: {mobPhase.a} мл.</ResultText>
      <ResultText> сумарна к - сть РФ B: {mobPhase.b} мл.</ResultText>
      <ResultText> сумарна к - сть РФ C: {mobPhase.c} мл.</ResultText>
      <ResultText> сумарна к - сть РФ D: {mobPhase.d} мл.</ResultText>
    </>
  );
};
