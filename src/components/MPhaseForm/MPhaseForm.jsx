import { StubContainer } from "../../pages/StubPage/StubPage.styled";
import { FirstStepForm } from "./FirstStepForm/FirstStepForm";
import { MPhContainer } from "./MPhaseForm.styled";

export const MPhaseForm = () => {
  return (
    <MPhContainer>
      <FirstStepForm />
    </MPhContainer>
  );
};
