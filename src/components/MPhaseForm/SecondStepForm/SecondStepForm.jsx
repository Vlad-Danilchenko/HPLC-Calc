import { BtnForm } from "../BtnForm/BtnForm";
import {
  InputFirstStepForm,
  LableMPhForm,
} from "../FirstStepForm/FirstStepForm.styled";

import Modal from "../../Modal/Modal";
import { CustomKeyboard } from "../../CustomKeyboard/CustomKeyboard";
import { useEffect, useState } from "react";
import { BorderForm, BorderLable } from "./SecondStepForm.styled";
import { GradientPhaseForm } from "../GradientPhaseForm/GradientPhaseForm";

export const SecondStepForm = ({
  step,
  setStep,
  mobPhaseForm,
  setMobPhaseForm,
}) => {
  const [formState, setFormState] = useState({
    flow: 1,
    numberOfShortRS: 0,
    timeOfShortRS: 0,
    numberOfLongRS: 0,
    timeOfLongRS: 0,
    timeOfTS: 0,
    timeOfAssay: 0,
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
      {mobPhaseForm.typeOfFlow === "isocratic" && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStep("finish");
            setMobPhaseForm((prev) => ({
              ...prev,
              ...formState,
            }));
          }}
        >
          <LableMPhForm>
            Вкажи швидкість потоку(мл/хв):
            <InputFirstStepForm
              name="flow"
              type="number"
              inputMode="none"
              onFocus={handleFocusInput}
              value={formState.flow}
            />
          </LableMPhForm>
          {mobPhaseForm.exponent.includes("impurity") && (
            <BorderForm>
              <BorderLable>Impurity</BorderLable>
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
                Вкажи орієнтовний час хроматографування тестового р-ну:
                <InputFirstStepForm
                  name="timeOfTS"
                  type="number"
                  inputMode="none"
                  onFocus={handleFocusInput}
                  value={formState.timeOfTS}
                />
              </LableMPhForm>
            </BorderForm>
          )}
          {(mobPhaseForm.exponent.includes("assay") ||
            mobPhaseForm.exponent.includes("dissolution") ||
            mobPhaseForm.exponent.includes("uniformity")) && (
            <LableMPhForm>
              Вкажи орієнтовний час хроматографування:
              <InputFirstStepForm
                name="timeOfAssay"
                type="number"
                inputMode="none"
                onFocus={handleFocusInput}
                value={formState.timeOfAssay}
              />
            </LableMPhForm>
          )}
          <BtnForm step={step} setStep={setStep} />
        </form>
      )}

      {mobPhaseForm.typeOfFlow === "gradient" && <GradientPhaseForm />}

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
