import { useEffect, useState } from "react";
import {
  FormBtn,
  ResultText,
  StyledInput,
  StyledLabel,
  Text,
} from "./WaterCounter.styled";
import { CustomKeyboard } from "../CustomKeyboard/CustomKeyboard";
import Modal from "../Modal/Modal";

export const WaterCounter = () => {
  const [formState, setFormState] = useState({ first: 0, second: 0 });
  const [result, setResult] = useState(0);

  const [keyboardValue, setKeyboardValue] = useState({ name: "", number: "" });
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((state) => !state);
  };

  const handleFocusInput = (e) => {
    setShowModal((state) => !state);
    setKeyboardValue({
      number: [formState[e.target.name]],
      name: e.target.name,
    });
  };

  useEffect(() => {
    setFormState((prev) => ({
      ...prev,
      [keyboardValue.name]: [keyboardValue.number],
    }));
  }, [keyboardValue.name, keyboardValue.number]);

  useEffect(() => {
    const { first, second } = formState;
    const firstNumb = Number(first);
    const seconsdNumb = Number(second);
    const sum = firstNumb + seconsdNumb;
    const arithmeticMean = sum / 2;
    const res = ((firstNumb - seconsdNumb) / arithmeticMean) * 100;

    setResult(Math.abs(res.toFixed(2)));
  }, [formState]);

  return (
    <>
      <Text>Please enter the result of...</Text>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // formSubmit();
        }}
      >
        <StyledLabel>
          the first test:
          <StyledInput
            inputMode="none"
            value={formState.first}
            name="first"
            onFocus={handleFocusInput}
            // onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          the second test:
          <StyledInput
            inputMode="none"
            value={formState.second}
            name="second"
            onFocus={handleFocusInput}

            // onChange={handleChange}
          />
        </StyledLabel>
        {/* <FormBtn type="submit">Submit</FormBtn> */}
      </form>
      {result && <ResultText>Your result: {result}%</ResultText>}

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
