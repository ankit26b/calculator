import styles from "./ButtonContainer.module.css";

let items = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];

const ButtonsContainer = ({handleonButtonClick}) => {
  return (
    <div className={styles.buttonsContainer}>
      {items.map((item)=>(
        <button className={styles.button} onClick={()=> handleonButtonClick(item)}>{item}</button>
      ))}
      
    </div>
  );
};
export default ButtonsContainer;
