import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          const errorMessage = {
            error: true,
            status: response.status,
            statusText: response.statusText
              ? response.statusText
              : 'ocurrió un error',
          };

          throw errorMessage;
        }

        const data = await response.json();

        setIsPending(false);
        setData(data);
        setError({ error: false });
      } catch (error) {
        setIsPending(true);
        setError(error);
      }
    };

    getData(url);
  }, [url]);

  return { data, isPending, error };
};
