import React, { useState,Fragment } from "react";

function Input({ name, placeholder, onChange, value }) {
const [visibility,setVisibility]=useState(false)

  return (
    <Fragment>
      <input
        type={visibility?"text":"password"}
        className="form-control"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      <span className ="icon" onClick={()=>setVisibility(!visibility)}>
        <i className={visibility?"far fa-eye":"far fa-eye fa-eye-slash" }></i>
      </span>
    </Fragment>
  );
}

export default Input;
