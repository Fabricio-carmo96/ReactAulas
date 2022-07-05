import React, { useEffect, useState } from "react";
import axios from "axios";
import imgEdit from "../img/edit.ico";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState("");

  const url = "http://localhost:8881/";

  useEffect(() => {
    fetch(url + "usuarios")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.log(err));
  }, [url]);

  function novosDados() {
    setTipo("novo");
  }

  function cancelarDados() {
    setId("");
    setNome("");
    setEmail("");
    setTipo("");
  }

  function editarDados(cod) {
    console.log(cod);
    let usuario = usuarios.find(item => item.id === cod);
    const {id, nome, email} = usuario;
    console.log(usuario);
    setTipo("editar");
    setId(id);
    setNome(nome);
    setEmail(email);
  }

  function atualizaListaUsuarios(){

    setTipo("");
  }

  function gravaDados() {
    if (nome !== "" && email !== "") {
      if (tipo === "novo") {
        axios
          .post(url + "usuarios", {
            nome: nome,
            email: email,
          })
          .then((response) => atualizaListaUsuarios(response))
          .catch((err) => console.log(err));
      } else if (tipo === "editar") {
          axios.put(url + "usuarios/" + id, {
          id: id,
          nome: nome,
          email: email,
        })
        .then(response => atualizaListaUsuarios(response))
        .catch((err) => console.log(err));
      }
    } else {
      console.log("Preencha os campos");
    }
  }

  return (
    <div>
      <button type="button" onClick={novosDados}>
        Novo
      </button>
      {tipo ? (
        <>
          <input
            type="text"
            name="txtNome"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
          <input
            type="text"
            name="txtEmail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button type="button" onClick={cancelarDados}>
            Cancelar
          </button>
          <button type="button" onClick={gravaDados}>
            Gravar
          </button>
        </>
      ) : (
        false
      )}
      {usuarios
        ? usuarios.map((item) => {
            return (
              <div key={item.id}>
                <div>
                  {" "}
                  {item.id} - {item.nome} - {item.email}{" "}
                  <img
                    alt="Editar"
                    src={imgEdit}
                    id={item.id}
                    height={20}
                    width={20}
                    onClick={(e) => editarDados(item.id)}
                  />
                </div>
              </div>
            );
          })
        : false}
    </div>
  );
}