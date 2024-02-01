import { useEffect, useState } from "react";
import {
  KeyboardBox,
  KeyboardBtn,
  KeyboardInput,
  Keyboardli,
} from "./CustomKeyboard.styled";

export const CustomKeyboard = ({ setOutputValue, keyboardValue }) => {
  const keynumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0];
  const [output, setOutput] = useState("0");

  const handleNumberClick = (value) => {
    if (output === "0") {
      setOutput("");
    }
    if (output === "0" && value === ".") {
      setOutput("0");
    }
    setOutput((prev) => (prev += value));
  };

  const handleOperationsClick = (value) => {
    if (value === "Delete") {
      setOutput((prev) => prev.substring(0, prev.length - 1));
    }
    // if (value === "Return") {
    //   setOutputValue((prev) => ({
    //     ...prev,
    //     number: output,
    //   }));
    // }
  };
  useEffect(() => {
    setOutputValue((prev) => {
      if (prev.name !== keyboardValue.name) {
        console.log(output);
        setOutput("0");
      }
      return { ...prev, number: output };
    });
  }, [output, setOutputValue]);

  return (
    <div>
      <KeyboardInput>
        <p>{output}</p>
      </KeyboardInput>
      <KeyboardBox>
        {keynumber.map((item) => (
          <Keyboardli key={item}>
            <KeyboardBtn onClick={() => handleNumberClick(item)}>
              {item}
            </KeyboardBtn>
          </Keyboardli>
        ))}
        <Keyboardli>
          <KeyboardBtn onClick={() => handleOperationsClick("Delete")}>
            Delete
          </KeyboardBtn>
        </Keyboardli>
        {/* <Keyboardli>
          <KeyboardBtn
            onClick={() => {
              handleOperationsClick("Return");
            }}
          >
            Return
          </KeyboardBtn>
        </Keyboardli> */}
      </KeyboardBox>
    </div>
  );
};
