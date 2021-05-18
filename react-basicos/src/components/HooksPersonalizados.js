import React from 'react';
import { useFetch } from '../hooks/useFetch';

export default function HooksPersonalizados() {
  let url = 'https://pokeapi.co/api/v2/pokemon/';
  url = 'https://jsonplaceholder.typicode.com/users';

  const { data, isPending, error } = useFetch(url);

  return (
    <div>
      <h2>Hooks personalizados</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>
        <mark>{JSON.stringify(error)}</mark>
      </h3>
      <h6>
        <pre style={{ whiteSpace: 'pre-wrap' }}>
          <code>{JSON.stringify(data)}</code>
        </pre>
      </h6>
    </div>
  );
}
