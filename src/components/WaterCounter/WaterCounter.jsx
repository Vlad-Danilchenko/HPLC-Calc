import { useEffect, useState } from "react";
import { FormBtn, StyledInput, StyledLabel, Text } from "./WaterCounter.styled";

export const WaterCounter = () => {
  const [formState, setFormState] = useState({ first: "", second: "" });
  const [result, setResult] = useState();

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
            value={formState.first}
            name="first"
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          the second test:
          <StyledInput
            value={formState.second}
            name="second"
            onChange={handleChange}
          />
        </StyledLabel>
        {/* <FormBtn type="submit">Submit</FormBtn> */}
      </form>
      <p style={styles}>Your result: {result}%</p>
    </>
  );
};
