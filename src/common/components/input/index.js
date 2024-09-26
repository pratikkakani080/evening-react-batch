import React from "react";

function Input({ type, name, onChange, value, inputLabel, isError }) {
  // const renderError = () => {
  //   if (isError) {
  //    return <span style={{ color: "red", fontSize: "10px" }}>
  //         * this field is mandatory
  //       </span>
  //   }
  // }
  return (
    <div>
      <label htmlFor={name}>{inputLabel}</label>
      <input type={type} name={name} onChange={onChange} value={value} />
      <br />
      {/* {renderError()} */}
      {isError && (
        <span style={{ color: "red", fontSize: "10px" }}>
          * this field is mandatory
        </span>
      )}
    </div>
  );
}

export default Input;
