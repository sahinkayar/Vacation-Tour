import React, { useState } from "react";
import Tour from "./Tour";

function Tours() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  const myFetch = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://course-api.com/react-tours-project"
      );
      const data = await response.json();
      setState(data);
      setLoading(false);
    } catch {
      setLoading(false);
      console.log(loading);
    }
  };

  useState(() => {
    myFetch();
  }, []);

  const HandleDelete = (id) => {
    const updated = state.filter((item) => {
      return item.id !== id;
    });
    setState(updated);
  };
  if (state.length === 0) {
    return (
      <div className="Refresh">
        <h3>No Tours Left</h3>
        <button onClick={myFetch} className="btn-Refresh">
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="tours">
      {" "}
      {loading && <h1>Loading...</h1>}
      {state.map((state) => {
        return (
          <Tour
            state={state}
            key={state.id}
            onDelete={HandleDelete}
            loading={loading}
          />
        );
      })}
      <button onClick={() => setState([])} className="Delete">
        Delete all
      </button>
    </div>
  );
}

export default Tours;
