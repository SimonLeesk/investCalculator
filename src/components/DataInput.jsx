import React from 'react';

export default function DataInput({ title, field }) {
  React.useState(inputValue, setInputValue) = (0);

  return (
    <p>
      <label>{title}</label>
      <input type="number" required name={field} />
    </p>
  );
}
