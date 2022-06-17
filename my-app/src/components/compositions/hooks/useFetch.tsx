import { useState, useEffect } from "react";

const useFetch = <T,>(api: string) => {
  const [data, setData] = useState<Array<T>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    const getApiData = async () => {
      setLoading(true);
      try {
        const response = await fetch(api);
        const data = await response.json();
        setData(data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    getApiData();
  }, [api]);

  return { data, loading, error };
};

export default useFetch;
