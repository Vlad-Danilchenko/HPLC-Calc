import { useEffect, useState } from "react";
import Modal from "../../Modal/Modal";
import { CustomKeyboard } from "../../CustomKeyboard/CustomKeyboard";
import {
  FormText,
  InputFirstStepForm,
  LableMPhForm,
} from "./FirstStepForm.styled";
import { BtnForm } from "../BtnForm/BtnForm";

export const FirstStepForm = ({
  step,
  setStep,
  mobPhaseForm,
  setMobPhaseForm,
}) => {
  const [keyboardValue, setKeyboardValue] = useState({
    name: "",
    number: 0,
  });

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((state) => !state);
  };

  const [exponentArray, setExponentArray] = useState([]);

  const handleFocusInput = (e) => {
    setShowModal((state) => !state);
  };

  useEffect(() => {
    setMobPhaseForm((prev) => ({
      ...prev,
      numberOfSeries: keyboardValue.number,
    }));
  }, [keyboardValue.number]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setExponentArray((prev) => [...prev, value]);
    } else {
      const idxValue = exponentArray.indexOf(value);
      setExponentArray((prev) => prev.splice(idxValue, 1));
    }
  };

  const handleChange = (e) => {
    setMobPhaseForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
            // typeOfFlow: "isocratic",
          }));
        }}
      >
        <LableMPhForm>
          Вкажи кількість серій:
          <InputFirstStepForm
            inputMode="none"
            // type="number"
            name="numberOfSeries"
            onFocus={handleFocusInput}
            value={keyboardValue.number}
            onChange={handleChange}
          />
        </LableMPhForm>
        <FormText>Обери програму хроматографування:</FormText>
        <div>
          <LableMPhForm>
            <input
              type="radio"
              name="typeOfFlow"
              value="isocratic"
              onChange={handleChange}
            />
            Isocratic
          </LableMPhForm>
          <LableMPhForm>
            <input
              type="radio"
              name="typeOfFlow"
              value="gradient"
              onChange={handleChange}
            />
            Gradient
          </LableMPhForm>
        </div>
        <FormText>Вибери з переліку свої показники:</FormText>
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
        <BtnForm step={step} setStep={setStep} />
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
