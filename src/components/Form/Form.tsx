import { useState } from "react";
import Limit from "../Limit/Limit";
import "./Form.module.css";
const Form = () => {
  const [inputText, setInputText] = useState("");
  const [isTooLong, setIsTooLong] = useState(false);

  const changeHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    if (value.length < 10) {
      setInputText(value);
      setIsTooLong(false);
    } else {
      setIsTooLong(true);
    }
  };

  const checkColor = (color: string) => {
    return CSS.supports("color", color);
  };

  const dynamicTextClass = checkColor(inputText) ? "dynamic-text" : "dynamic-text invalid-color";
  const inputClass = isTooLong ? "input-text too-long" : "input-text";

  return (
    <div>
      {isTooLong && <Limit limit={10} />}
      <h1 className={dynamicTextClass} style={{ color: checkColor(inputText) ? inputText : "black" }}>
        {inputText}
      </h1>
      <input
        type="text"
        className={inputClass}
        placeholder="Type name"
        onChange={changeHandler}
        value={inputText}
      />
    </div>
  );
};

export default Form;
