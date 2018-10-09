import React from "react";

export default ({ type, value, onChange, name, checked = false }) => (
  <input
    type={type}
    name={name}
    onChange={e => {
      onChange(e, name);
    }}
    value={value}
    checked={checked}
  />
);
