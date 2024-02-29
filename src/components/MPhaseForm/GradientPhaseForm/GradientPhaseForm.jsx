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
import { FormBtn } from "../BtnForm/BtnForm.styled";

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
    let newArr = [...gradTable[keyboardValue.name]];
    newArr.splice(keyboardValue.id, 1, keyboardValue.number);
    setGradTable((prev) => ({
      ...prev,
      [keyboardValue.name]: [...newArr],
    }));
  }, [keyboardValue]);

  const handleAddRow = () => {
    let newArrIdKey = [...gradTable.idKey];
    const addArg = newArrIdKey[newArrIdKey.length - 1] + 1;
    let newArrTime = [...gradTable.time];
    let newArrA = [...gradTable.a];
    let newArrB = [...gradTable.b];
    let newArrC = [...gradTable.c];
    let newArrD = [...gradTable.d];
    let newArrFlow = [...gradTable.flow];

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

  useEffect(() => {
    console.log(gradTable);
  }, [gradTable]);

  return (
    <div>
      <form>
        {gradTable.idKey.map((item) => {
          const idx = gradTable.idKey.indexOf(item);
          //  if (!gradTable.a[idx]) {
          //    console.log(gradTable.a[idx]);
          //    if (gradTable.a[idx - 1]) {
          //      console.log("if work");
          //      gradTable.a.push(gradTable.a[idx - 1]);
          //    } else {
          //      gradTable.a.push(0);
          //    }
          //  }
          //  if (!gradTable.b[idx]) {
          //    if (gradTable.b[idx - 1]) {
          //      gradTable.b.push(gradTable.b[idx - 1]);
          //    } else {
          //      gradTable.b.push(0);
          //    }
          //  }
          //  if (!gradTable.c[idx]) {
          //    if (gradTable.c[idx - 1]) {
          //      gradTable.c.push(gradTable.c[idx - 1]);
          //    } else {
          //      gradTable.c.push(0);
          //    }
          //  }
          //  if (!gradTable.d[idx]) {
          //    if (gradTable.d[idx - 1]) {
          //      gradTable.d.push(gradTable.d[idx - 1]);
          //    } else {
          //      gradTable.d.push(0);
          //    }
          //  }
          //  if (!gradTable.flow[idx]) {
          //    gradTable.flow.push(gradTable.flow[idx - 1]);
          //  }
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
