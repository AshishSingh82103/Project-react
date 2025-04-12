import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
function App() {
  const [calVal, setCalVAl] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVAl("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVAl(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVAl(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
