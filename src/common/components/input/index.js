import React from "react";

function Input({ type, name, onChange, value, inputLabel }) {
  return (
    <div>
      <label htmlFor={name}>{inputLabel}</label>
      <input type={type} name={name} onChange={onChange} value={value} />
    </div>
  );
}

export default Input;
