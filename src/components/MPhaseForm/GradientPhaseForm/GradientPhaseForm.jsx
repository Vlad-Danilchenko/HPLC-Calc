import { useEffect, useState } from "react";
import { BtnForm } from "../BtnForm/BtnForm";
import {
  GradBtnBox,
  GradTableBtn,
  GradTableInput,
  GradTableLabelText,
  GradTableRow,
} from "./GradientPhaseForm.styled";
import Modal from "../../Modal/Modal";
import { CustomKeyboard } from "../../CustomKeyboard/CustomKeyboard";
import {
  BorderForm,
  BorderLable,
} from "../SecondStepForm/SecondStepForm.styled";
import {
  InputFirstStepForm,
  LableMPhForm,
} from "../FirstStepForm/FirstStepForm.styled";

export const GradientPhaseForm = ({
  step,
  setStep,
  mobPhaseForm,
  setMobPhaseForm,
}) => {
  const [gradTable, setGradTable] = useState({
    idKey: [0],
    time: [0],
    a: [50],
    b: [50],
    c: [0],
    d: [0],
    flow: [1],
  });
  const [numberOfImpRS, setNumberOfImpRS] = useState(0);
  let firsRender = true;

  const [keyboardValue, setKeyboardValue] = useState({
    id: 0,
    name: "time",
    number: 0,
  });
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((state) => !state);
  };
  const handleFocusInput = (e) => {
    const { name, id } = e.target;
    //  console.log(idx);
    setShowModal((state) => !state);
    setKeyboardValue({
      number: 0,
      name: name,
      id: id,
    });
  };
  useEffect(() => {
    firsRender = !firsRender;
    if (firsRender) {
      return;
    }
    if (keyboardValue.name === "numberOfImpRS") {
      setNumberOfImpRS(keyboardValue.number);
    } else {
      let newArr = [...gradTable[keyboardValue.name]];
      newArr.splice(keyboardValue.id, 1, keyboardValue.number);
      setGradTable((prev) => ({
        ...prev,
        [keyboardValue.name]: [...newArr],
      }));
    }
  }, [keyboardValue]);

  const handleAddRow = () => {
    let newArrIdKey = [...gradTable.idKey];
    const addArg = newArrIdKey[newArrIdKey.length - 1] + 1;

    setGradTable((prev) => ({
      idKey: [...newArrIdKey, addArg],
      time: [...prev.time, 0],
      a: [...prev.a, 0],
      b: [...prev.b, 0],
      c: [...prev.c, 0],
      d: [...prev.d, 0],
      flow: [...prev.flow, 1],
    }));

    //  console.log(gradTable);
  };

  const handleDeleteRow = () => {
    const arrIdKey = [...gradTable.idKey];
    const delArgIdx = arrIdKey.length - 1;
    const newArrIdkey = arrIdKey.slice(0, delArgIdx);
    //   console.log(newArrIdkey);
    setGradTable((prev) => ({
      idKey: [...newArrIdkey],
      time: [...prev.time.slice(0, delArgIdx)],
      a: [...prev.a.slice(0, delArgIdx)],
      b: [...prev.b.slice(0, delArgIdx)],
      c: [...prev.c.slice(0, delArgIdx)],
      d: [...prev.d.slice(0, delArgIdx)],
      flow: [...prev.flow.slice(0, delArgIdx)],
    }));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setStep("finish");
          setMobPhaseForm((prev) => ({
            ...prev,
            ...gradTable,
            numberOfImpRS,
          }));
        }}
      >
        {mobPhaseForm.exponent.includes("impurity") && (
          <BorderForm>
            <BorderLable>Impurity</BorderLable>
            <LableMPhForm>
              Вкажи к-сть RS на домішки (шт):
              <InputFirstStepForm
                name="numberOfImpRS"
                type="number"
                inputMode="none"
                onFocus={handleFocusInput}
                value={numberOfImpRS}
              />
            </LableMPhForm>
          </BorderForm>
        )}

        {gradTable.idKey.map((item) => {
          const idx = gradTable.idKey.indexOf(item);
          return (
            <GradTableRow key={item}>
              <lable>
                {idx === 0 && <GradTableLabelText>Time</GradTableLabelText>}
                <GradTableInput
                  id={idx}
                  name="time"
                  inputMode="none"
                  value={gradTable.time[idx]}
                  onFocus={handleFocusInput}
                />
              </lable>
              <lable>
                {idx === 0 && <GradTableLabelText>A</GradTableLabelText>}
                <GradTableInput
                  id={idx}
                  name="a"
                  inputMode="none"
                  value={gradTable.a[idx]}
                  onFocus={handleFocusInput}
                />
              </lable>
              <lable>
                {idx === 0 && <GradTableLabelText>B</GradTableLabelText>}
                <GradTableInput
                  id={idx}
                  name="b"
                  inputMode="none"
                  value={gradTable.b[idx]}
                  onFocus={handleFocusInput}
                />
              </lable>
              <lable>
                {idx === 0 && <GradTableLabelText>C</GradTableLabelText>}
                <GradTableInput
                  id={idx}
                  name="c"
                  inputMode="none"
                  value={gradTable.c[idx]}
                  onFocus={handleFocusInput}
                />
              </lable>
              <lable>
                {idx === 0 && <GradTableLabelText>D</GradTableLabelText>}
                <GradTableInput
                  id={idx}
                  name="d"
                  inputMode="none"
                  value={gradTable.d[idx]}
                  onFocus={handleFocusInput}
                />
              </lable>
              <lable>
                {idx === 0 && <GradTableLabelText>Flow</GradTableLabelText>}
                <GradTableInput
                  id={idx}
                  name="flow"
                  inputMode="none"
                  value={gradTable.flow[idx]}
                  onFocus={handleFocusInput}
                />
              </lable>
            </GradTableRow>
          );
        })}
        <GradBtnBox>
          <GradTableBtn type="button" onClick={handleAddRow}>
            Add row
          </GradTableBtn>
          <GradTableBtn type="button" onClick={handleDeleteRow}>
            Delete row
          </GradTableBtn>
        </GradBtnBox>
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
    </div>
  );
};
