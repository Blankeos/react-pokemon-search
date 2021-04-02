import React from "react";

function Home({ prop: results }) {
  return (
    <div>
      {results &&
        results.map((val) => {
          return <div key={val.idx}>{val.name}</div>;
        })}
    </div>
  );
}

export default Home;
