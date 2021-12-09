import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type text"
          value={value}
          onChange={handleChange}
        />
        <button>Print console log</button>
      </form>
    </div>
  );
}

export default App;
