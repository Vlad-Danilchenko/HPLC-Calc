import { useState } from "react";
import {
  StyledInput,
  StyledLabel,
} from "../../WaterCounter/WaterCounter.styled";
import Modal from "../../Modal/Modal";
import { CustomKeyboard } from "../../CustomKeyboard/CustomKeyboard";
import { InputFirstStepForm } from "./FirstStepForm.styled";

export const FirstStepForm = () => {
  const [keyboardValue, setKeyboardValue] = useState({
    name: "",
    number: "1",
  });

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((state) => !state);
  };
  const handleFocusInput = (e) => {
    setShowModal((state) => !state);
    //  setKeyboardValue({
    //    number: [formState[e.target.name]],
    //    name: e.target.name,
    //  });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // formSubmit();
        }}
      >
        <StyledLabel>
          Вкажи кількість серій
          <InputFirstStepForm
            type="number"
            name="numberOfSeries"
            onFocus={handleFocusInput}
            value={keyboardValue.number}
          />
        </StyledLabel>
        <p>Обери програму хроматографування:</p>
        <StyledLabel>
          isocratic
          <input type="radio" name="typeOfFlow" value="isocratic" checked />
        </StyledLabel>
        <StyledLabel>
          gradient
          <input type="radio" name="typeOfFlow" value="gradient" />
        </StyledLabel>
        <p>Вибери з передіку свої показники:</p>
        <StyledLabel>
          <input type="checkbox" name="exponent" value="impurity" />
          Impurity
        </StyledLabel>
        <StyledLabel>
          <input type="checkbox" name="exponent" value="assay" />
          Assay
        </StyledLabel>
        <StyledLabel>
          <input type="checkbox" name="exponent" value="dissolution" />
          Dissolution
        </StyledLabel>
        <StyledLabel>
          <input type="checkbox" name="exponent" value="uniformity" />
          Uniformity of dosage
        </StyledLabel>
      </form>
      {showModal && (
        <Modal isOpen={toggleModal}>
          <CustomKeyboard
            setOutputValue={setKeyboardValue}
            keyboardValue={keyboardValue}
          />
        </Modal>
      )}
    </>
  );
};
