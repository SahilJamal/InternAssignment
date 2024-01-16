import React, { useState } from "react";
import axios from "axios";

const Update = () => {
  const [configId, setConfigId] = useState("");
  const [data, setData] = useState(null);
  const [remark, setRemark] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await axios.put(
        `http://localhost:8080/api/configurations/${configId}`,
        { remark }
      );
      const fetchedData = await response.data;
      setData(fetchedData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Update Configuration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="configId">Config ID:</label>
        <input
          type="text"
          id="configId"
          value={configId}
          onChange={(e) => setConfigId(e.target.value)}
        />
        <label htmlFor="remark">Remark:</label>
        <textarea
          id="remark"
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Updating..." : "Submit"}
        </button>
      </form>

      <p>
        Click the "Submit" button - the confogId and reamrks will be "PUT" on
        api from
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>
          http://localhost:8080/api/configurations/$"{"Id"}"
        </span>
        and remark fields get updated for the provided configId
      </p>

      {error && <p className="error">{error}</p>}
      {data && (
        <div>
          <h2>Result: http://localhost:8080/api/configurations/$"{"Id"}"</h2>
          <pre>{JSON.stringify(data)}</pre>
        </div>
      )}
    </div>
  );
};

export default Update;
