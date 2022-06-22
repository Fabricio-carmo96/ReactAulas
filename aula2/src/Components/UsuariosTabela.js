import React from "react";

export default function UsuariosTabela(props) {
  return (
     <table>
      <thead>
        <tr>
          <th colSpan="2">Lista de Usuarios</th>
        </tr>
      </thead>
      <tbody>
        {props.usuarios.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name} </td>
              <td>{item.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
