import React, { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  function incContador() {
    setContador(contador + 1);
  }

  function decContador() {
    setContador((contador) => contador - 1);
  }

  return (
    <div>
      <h1>Teste Contador</h1>
      <p>{contador}</p>
      <button onClick={incContador}>Incremeta Contador</button>
      <button onClick={decContador}>Decrementa Contador</button>
    </div>
  );
}
