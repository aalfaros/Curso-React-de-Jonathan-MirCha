import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
  {
    id: 1,
    name: 'Seiya',
    constellation: 'Pegaso',
  },
  {
    id: 2,
    name: 'Shiryu',
    constellation: 'Dragón',
  },
  {
    id: 3,
    name: 'Hyoga',
    constellation: 'Cisne',
  },
  {
    id: 4,
    name: 'Shun',
    constellation: 'Andrómeda',
  },
  {
    id: 5,
    name: 'Ikki',
    constellation: 'Fénix',
  },
];

export default function CrudApp() {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  return (
    <>
      <h2>CRUD App</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </>
  );

  function createData(data) {
    data.id = initialDb[initialDb.length - 1].id + 1;
    setDb([...initialDb, data]);
  }

  function updateData(data) {
    const newData = db.map((element) =>
      element.id === data.id ? data : element
    );

    setDb(newData);
  }

  function deleteData(id) {
    const record = db.find((element) => element.id === id);
    const isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro '${record.name} de ${record.constellation}'?`
    );

    if (isDelete) {
      const newData = db.filter((element) => element.id !== id);
      setDb(newData);
    } else {
      return;
    }
  }
}
