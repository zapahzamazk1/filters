import React from "react";

export default ({ type, value, onChange, name, checked = false }) => (
  <input
    type={type}
    name={name}
    onChange={onChange}
    value={name}
    checked={checked}
  />
);
