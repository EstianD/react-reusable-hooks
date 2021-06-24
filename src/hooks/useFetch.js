import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url = "", options = "") => {
  // Define state for hook
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);

    axios
      .get(url, options)
      .then((data) => {
        if (isMounted) {
          // Check if component is still mounted
          setData(data); // Set data to response
          setError(null); // Set error = null on success
          console.log("DATA: ", data);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error); // Set error on failure
          setData(null); // Set data = null on failure
          console.log("ERROR: ", error);
        }
      })
      .finally(() => isMounted && setLoading(false)); // Cleanup function after request completes

    return () => (isMounted = false);
  }, [url, options]);

  return { loading, data, error };
};
