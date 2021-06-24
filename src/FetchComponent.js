import React from "react";
import { useFetch } from "./hooks/useFetch";

const URL = "https://jsonplaceholder.typicode.com/users";

const FetchComponent = () => {
  const { loading, data, error } = useFetch(URL);

  if (loading) return "Loading...";
  if (error) return "Something went wrong";

  return (
    <div style={{ border: "1px solid black" }}>
      <h3>Fetch example:</h3>
      <ul>
        {data?.data?.map((item, i) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchComponent;
