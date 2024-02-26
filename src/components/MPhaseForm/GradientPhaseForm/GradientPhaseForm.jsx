import { useEffect, useState } from "react";
import { BtnForm } from "../BtnForm/BtnForm";
import { GradTableInput, GradTableRow } from "./GradientPhaseForm.styled";
import Modal from "../../Modal/Modal";
import { CustomKeyboard } from "../../CustomKeyboard/CustomKeyboard";

export const GradientPhaseForm = ({
  step,
  setStep,
  mobPhaseForm,
  setMobPhaseForm,
}) => {
  const [gradTable, setGradTable] = useState({
    time: [0, 1, 2, 3],
    a: [50, 40],
    b: [50],
    c: [100],
    d: [],
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
    console.log(newArr);
    setGradTable((prev) => ({
      ...prev,
      [keyboardValue.name]: [...newArr],
    }));
  }, [keyboardValue]);

  return (
    <div>
      <form>
        {gradTable.time.map((item) => {
          const idx = gradTable.time.indexOf(item);
          if (!gradTable.a[idx]) {
            if (gradTable.a[idx - 1]) {
              gradTable.a.push(gradTable.a[idx - 1]);
            } else {
              gradTable.a.push(0);
            }
          }
          if (!gradTable.b[idx]) {
            if (gradTable.b[idx - 1]) {
              gradTable.b.push(gradTable.b[idx - 1]);
            } else {
              gradTable.b.push(0);
            }
          }
          if (!gradTable.c[idx]) {
            if (gradTable.c[idx - 1]) {
              gradTable.c.push(gradTable.c[idx - 1]);
            } else {
              gradTable.c.push(0);
            }
          }
          if (!gradTable.d[idx]) {
            if (gradTable.d[idx - 1]) {
              gradTable.d.push(gradTable.d[idx - 1]);
            } else {
              gradTable.d.push(0);
            }
          }
          if (!gradTable.flow[idx]) {
            gradTable.flow.push(gradTable.flow[idx - 1]);
          }
          return (
            <GradTableRow key={item}>
              <lable>
                {idx === 0 && <p>Time</p>}
                <GradTableInput
                  id={idx}
                  name="time"
                  inputMode="none"
                  value={item}
                  onFocus={handleFocusInput}
                />
              </lable>
              <lable>
                {idx === 0 && <p>A</p>}
                <GradTableInput
                  id={idx}
                  name="a"
                  inputMode="none"
                  value={gradTable.a[idx]}
                  onFocus={handleFocusInput}
                />
              </lable>
              <lable>
                {idx === 0 && <p>B</p>}
                <GradTableInput
                  id={idx}
                  name="b"
                  inputMode="none"
                  value={gradTable.b[idx]}
                  onFocus={handleFocusInput}
                />
              </lable>
              <lable>
                {idx === 0 && <p>C</p>}
                <GradTableInput
                  id={idx}
                  name="c"
                  inputMode="none"
                  value={gradTable.c[idx]}
                  onFocus={handleFocusInput}
                />
              </lable>
              <lable>
                {idx === 0 && <p>D</p>}
                <GradTableInput
                  id={idx}
                  name="d"
                  inputMode="none"
                  value={gradTable.d[idx]}
                  onFocus={handleFocusInput}
                />
              </lable>
              <lable>
                {idx === 0 && <p>Flow</p>}
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
