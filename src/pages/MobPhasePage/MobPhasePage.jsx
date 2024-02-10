import { useState } from "react";
import { MPhaseForm } from "../../components/MPhaseForm/MPhaseForm";

export const MobPhasePage = () => {
  const [mobPhaseForm, setMobPhaseForm] = useState({});

  return (
    <MPhaseForm mobPhaseForm={mobPhaseForm} setMobPhaseForm={setMobPhaseForm} />
  );
};
