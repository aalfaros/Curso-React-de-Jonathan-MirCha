import React from 'react';

export default function CrudTableRow({ row, setDataToEdit, deleteData }) {
  return (
    <tr>
      <td>{row.name}</td>
      <td>{row.constellation}</td>
      <td>
        <button onClick={() => setDataToEdit(row)}>Editar</button>
        <button onClick={() => deleteData(row.id)}>Eliminar</button>
      </td>
    </tr>
  );
}
