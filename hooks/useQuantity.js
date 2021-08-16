import { useState } from "react";

export const useQuantity = (defaultQuantity) => {
const [value, setValue] = useState(defaultQuantity);

const onChange = (e) => {
 if (!+e.target.value >= 1) {
    setValue(1);
    return;
 }
 setValue(+e.target.value);
};

return {
  value,
  setValue,
  onChange,
 };
};