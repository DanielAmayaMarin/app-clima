import React from "react";

export const Pais = () => {
  return (
    <>
      <section>
        <label htmlFor="país">Elige un país</label>
        <select onChange={countryHandle} name="país" id="SelectPaices">
          <option value="">Selecciona</option>
          {countries.map((contry) => (
            <option key={contry.cca2} value={contry.cca2}>
              {contry.name.common}
            </option>
          ))}
        </select>
      </section>
    </>
  );
};
