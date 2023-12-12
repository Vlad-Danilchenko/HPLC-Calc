import { useEffect, useState } from "react";
import { FormBtn, StyledInput, StyledLabel, Text } from "./WaterCounter.styled";
import { CustomKeyboard } from "../CustomKeyboard/CustomKeyboard";

export const WaterCounter = () => {
  const [formState, setFormState] = useState({ first: "", second: "" });
  const [result, setResult] = useState();

  const [keyboardValue, setKeyboardValue] = useState({ name: "", number: "" });
  const [isVisible, setIsVisible] = useState(false);

  // const handleChange = (e) => {
  //   setFormState((prev) => ({ ...prev, [e.target.name]: keyboardValue }));
  // };
  const handleFocusInput = (e) => {
    setIsVisible(true);
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

  // const formSubmit = () => {
  //   const { first, second } = formState;
  //   const firstNumb = Number(first);
  //   const seconsdNumb = Number(second);
  //   const sum = firstNumb + seconsdNumb;
  //   const arithmeticMean = sum / 2;
  //   const res = ((firstNumb - seconsdNumb) / arithmeticMean) * 100;

  //   setResult(res);
  // };

  useEffect(() => {
    const { first, second } = formState;
    const firstNumb = Number(first);
    const seconsdNumb = Number(second);
    const sum = firstNumb + seconsdNumb;
    const arithmeticMean = sum / 2;
    const res = ((firstNumb - seconsdNumb) / arithmeticMean) * 100;

    setResult(res);
  }, [formState]);
  // console.log(result);

  const styles = {
    color: "orange",
  };

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
      <p style={styles}>Your result: {result}%</p>

      <CustomKeyboard
        setOutputValue={setKeyboardValue}
        keyboardValue={keyboardValue}
      />
    </>
  );
};
