import { ChangeEventHandler, useState } from "react";

export const useInput = (initValue = "") => {
  const [value, setValue] = useState(initValue);
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  const reset = (resetValue = "") => setValue(resetValue);
  return { value, onChange, reset };
};
