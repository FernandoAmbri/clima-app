import React, { useState } from "react";

function Nav({ getSpecificTemp }) {
  const [text, setText] = useState("");
  return (
    <>
      <header>
        <div className="container">
          <h1>Weather App</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              getSpecificTemp(text);
              setText("");
            }}
          >
            <input
              type="search"
              name="search-weather"
              required
              autoComplete="off"
              placeholder="Ingresa el nombre de una ciudad..."
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <button type="submit" className="btn-search-weather">
              Buscar
            </button>
          </form>
        </div>
      </header>
    </>
  );
}

export default Nav;
