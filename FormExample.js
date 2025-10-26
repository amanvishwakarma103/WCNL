import React, { useState } from 'react';

function FormExample() {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>Form Example (Forms and Events)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter something"
        />
        <button type="submit">Submit</button>
      </form>
      {submittedValue && <p>You submitted: {submittedValue}</p>}
    </div>
  );
}

export default FormExample;
