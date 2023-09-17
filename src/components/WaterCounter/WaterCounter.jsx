import { useEffect, useState } from "react";
import { FormBtn, StyledInput } from "./WaterCounter.styled";

export const WaterCounter = () => {
  const [formState, setFormState] = useState({ first: "", second: "" });
  const [result, setResult] = useState();

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const { first, second } = formState;
    const firstNumb = Number(first);
    const seconsdNumb = Number(second);
    const sum = firstNumb + seconsdNumb;
    const arithmeticMean = sum / 2;
    const res = ((firstNumb - seconsdNumb) / arithmeticMean) * 100;

    setResult(res);
  });
  console.log(result);

  const styles = {
    color: "orange",
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          Tes 1:
          <StyledInput
            value={formState.first}
            name="first"
            onChange={handleChange}
          />
        </label>
        <label>
          test 2:
          <StyledInput
            value={formState.second}
            name="second"
            onChange={handleChange}
          />
        </label>
        <FormBtn type="submit">Submit</FormBtn>
      </form>
      <p style={styles}>{result}%</p>
    </>
  );
};
