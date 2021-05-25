import React, { useState, useEffect } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { helpHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import Message from './Message';

export default function CrudApi() {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = helpHttp();
  const url = 'http://localhost:5000/santos';

  useEffect(() => {
    setLoading(true);

    helpHttp()
      .get(url)
      .then((response) => {
        if (!response.err) {
          setDb(response);
          setError(null);
        } else {
          setDb(null);
          setError(response);
        }

        setLoading(false);
      });
  }, []);

  return (
    <>
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </>
  );

  function createData(data) {
    // data.id = initialDb[initialDb.length - 1].id + 1;
    data.id = Date.now();

    const options = {
      headers: { 'content-type': 'application/json' },
      body: data,
    };

    api.post(url, options).then((response) => {
      if (!response.err) {
        setDb([...db, response]);
      } else {
        setError(response);
      }
    });
  }

  function updateData(data) {
    const endpoint = `${url}/${data.id}`;

    const options = {
      headers: { 'content-type': 'application/json' },
      body: data,
    };

    api.put(endpoint, options).then((response) => {
      if (!response.err) {
        const newData = db.map((element) =>
          element.id === data.id ? data : element
        );

        setDb(newData);
      } else {
        setError(response);
      }
    });
  }

  function deleteData(id) {
    const record = db.find((element) => element.id === id);
    const isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro '${record.name} de ${record.constellation}'?`
    );

    if (isDelete) {
      const endpoint = `${url}/${id}`;
      const options = {
        headers: { 'content-type': 'application/json' },
      };

      api.del(endpoint, options).then((response) => {
        if (!response.err) {
          const newData = db.filter((element) => element.id !== id);
          setDb(newData);
        } else {
          setError(response);
        }
      });
    } else {
      return;
    }
  }
}
