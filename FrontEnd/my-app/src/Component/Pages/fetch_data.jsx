import React, { useState } from "react";

const Fetch_Data = () => {
  const [configId, setConfigId] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:8080/api/configurations/${configId}`
      ); // Replace with your backend endpoint
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Fetch Config</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="configId">Config To Load (configid): </label>
        <input
          type="text"
          id="configId"
          value={configId}
          onChange={(e) => setConfigId(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <p>
        Click the "Submit" button and the confogId with this if this will get
        from
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>
          http://localhost:8080/api/configurations/$"{"Id"}"
        </span>
        <br />
        and show below.
      </p>

      {isLoading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>Result: http://localhost:8080/api/configurations/$"{"Id"}"</h2>
          <pre>{JSON.stringify(data)}</pre>
        </div>
      )}
    </div>
  );
};

export default Fetch_Data;
