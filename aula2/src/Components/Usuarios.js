import React, { useEffect, useState } from "react";
import UsuariosTabela from "./UsuariosTabela";

export default function Usuarios() {
  const [dados, setDados] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    console.log("Requisitando dados por um fetch");
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setDados(resp))
      .catch((err) => console.log(err));
  }, [url]);
  return (
    <>
      <div>Usuarios</div>
      <h3>Listagem</h3>
      <UsuariosTabela usuarios={dados}/>
    </>
  );
}
