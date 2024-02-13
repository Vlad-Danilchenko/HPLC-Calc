import { BtnForm } from "../BtnForm/BtnForm";
import {
  InputFirstStepForm,
  LableMPhForm,
} from "../FirstStepForm/FirstStepForm.styled";

import Modal from "../../Modal/Modal";
import { CustomKeyboard } from "../../CustomKeyboard/CustomKeyboard";
import { useEffect, useState } from "react";

export const SecondStepForm = ({
  step,
  setStep,
  mobPhaseForm,
  setMobPhaseForm,
}) => {
  const [formState, setFormState] = useState({
    numberOfShortRS: "",
    timeOfShortRS: "",
    numberOfLongRS: "",
    timeOfLongRS: "",
    timeOfTS: "",
  });
  const [keyboardValue, setKeyboardValue] = useState({
    name: "",
    number: 1,
  });
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((state) => !state);
  };

  const handleFocusInput = (e) => {
    setShowModal((state) => !state);
    setKeyboardValue({
      number: [mobPhaseForm[e.target.name]],
      name: e.target.name,
    });
  };

  useEffect(() => {
    setFormState((prev) => ({
      ...prev,
      [keyboardValue.name]: keyboardValue.number,
    }));
  }, [keyboardValue.name, keyboardValue.number]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setStep("third");
          setMobPhaseForm((prev) => ({
            ...prev,
            ...formState,
          }));
        }}
      >
        <LableMPhForm>
          Вкажи к-сть RS на короткому методі:
          <InputFirstStepForm
            name="numberOfShortRS"
            type="number"
            inputMode="none"
            onFocus={handleFocusInput}
            value={formState.numberOfShortRS}
          />
        </LableMPhForm>
        <LableMPhForm>
          Вкажи орієнтовний час хроматографування на короткому методі:
          <InputFirstStepForm
            name="timeOfShortRS"
            type="number"
            inputMode="none"
            onFocus={handleFocusInput}
            value={formState.timeOfShortRS}
          />
        </LableMPhForm>
        <LableMPhForm>
          Вкажи к-сть RS на довгому методі:
          <InputFirstStepForm
            name="numberOfLongRS"
            type="number"
            inputMode="none"
            onFocus={handleFocusInput}
            value={formState.numberOfLongRS}
          />
        </LableMPhForm>
        <LableMPhForm>
          Вкажи орієнтовний час хроматографування на довгому методі:
          <InputFirstStepForm
            name="timeOfLongRS"
            type="number"
            inputMode="none"
            onFocus={handleFocusInput}
            value={formState.timeOfLongRS}
          />
        </LableMPhForm>
        <LableMPhForm>
          Вкажи орієнтовний час хроматографування на тестового р-ну:
          <InputFirstStepForm
            name="timeOfTS"
            type="number"
            inputMode="none"
            onFocus={handleFocusInput}
            value={formState.timeOfTS}
          />
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
