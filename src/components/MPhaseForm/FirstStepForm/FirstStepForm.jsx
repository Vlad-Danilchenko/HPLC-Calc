import { useState } from "react";
import Modal from "../../Modal/Modal";
import { CustomKeyboard } from "../../CustomKeyboard/CustomKeyboard";
import {
  FormText,
  InputFirstStepForm,
  LableMPhForm,
} from "./FirstStepForm.styled";

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
          <input type="checkbox" name="exponent" value="impurity" />
          Impurity
        </LableMPhForm>
        <LableMPhForm>
          <input type="checkbox" name="exponent" value="assay" />
          Assay
        </LableMPhForm>
        <LableMPhForm>
          <input type="checkbox" name="exponent" value="dissolution" />
          Dissolution
        </LableMPhForm>
        <LableMPhForm>
          <input type="checkbox" name="exponent" value="uniformity" />
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
