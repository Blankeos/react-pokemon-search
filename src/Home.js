import React from "react";
import { Link } from "react-router-dom";
function Home({ prop: results, resetFilters: resetFilters }) {
  return (
    <div className="mt-10 p-4 flex flex-wrap">
      {results &&
        results.map((val) => {
          return (
            <div className="ml-4 text-2xl text-yellow-500 transition hover:text-yellow-600">
              <Link
                onClick={resetFilters}
                to={`/about/${val.idx}`}
                key={val.idx}
              >
                {val.name}
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
