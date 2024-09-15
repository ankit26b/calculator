import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setcalVal] = useState("");

  const handleonButtonClick = (buttonText) => {
    if(buttonText === 'C'){
      setcalVal("");
    }else if(buttonText === '='){
      const result = eval(calVal);
      setcalVal(result);
    }else{
        const newVal = calVal + buttonText;
        setcalVal (newVal);
    }
  }

  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal} />
      <ButtonsContainer handleonButtonClick={handleonButtonClick} />
    </div>
  );
}

export default App;
