import { useState } from "react";
import Modal from "../../Modal/Modal";
import { CustomKeyboard } from "../../CustomKeyboard/CustomKeyboard";
import {
  FormText,
  InputFirstStepForm,
  LableMPhForm,
} from "./FirstStepForm.styled";

export const FirstStepForm = ({
  step,
  setStep,
  mobPhaseForm,
  setMobPhaseForm,
}) => {
  const [keyboardValue, setKeyboardValue] = useState({
    name: "",
    number: "1",
  });

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((state) => !state);
  };

  const exponentArray = [];

  const handleFocusInput = (e) => {
    setShowModal((state) => !state);
    //  setKeyboardValue({
    //    number: [formState[e.target.name]],
    //    name: e.target.name,
    //  });
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      exponentArray.push(e.target.value);
      console.log(exponentArray);
    } else {
      const idxValue = exponentArray.indexOf(value);
      exponentArray.splice(idxValue, 1);
      console.log(exponentArray);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setStep("second");
          setMobPhaseForm((prev) => ({
            ...prev,
            exponent: [...exponentArray],
          }));
        }}
      >
        <LableMPhForm>
          Вкажи кількість серій:
          <InputFirstStepForm
            inputMode="none"
            type="number"
            name="numberOfSeries"
            onFocus={handleFocusInput}
            value={keyboardValue.number}
          />
        </LableMPhForm>
        <FormText>Обери програму хроматографування:</FormText>
        <div>
          <LableMPhForm>
            <input type="radio" name="typeOfFlow" value="isocratic" checked />
            Isocratic
          </LableMPhForm>
          <LableMPhForm>
            <input type="radio" name="typeOfFlow" value="gradient" />
            Gradient
          </LableMPhForm>
        </div>
        <FormText>Вибери з передіку свої показники:</FormText>
        <LableMPhForm>
          <input
            type="checkbox"
            name="exponent"
            value="impurity"
            onChange={handleCheckboxChange}
          />
          Impurity
        </LableMPhForm>
        <LableMPhForm>
          <input
            type="checkbox"
            name="exponent"
            value="assay"
            onChange={handleCheckboxChange}
          />
          Assay
        </LableMPhForm>
        <LableMPhForm>
          <input
            type="checkbox"
            name="exponent"
            value="dissolution"
            onChange={handleCheckboxChange}
          />
          Dissolution
        </LableMPhForm>
        <LableMPhForm>
          <input
            type="checkbox"
            name="exponent"
            value="uniformity"
            onChange={handleCheckboxChange}
          />
          Uniformity of dosage
        </LableMPhForm>
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
