import React from "react";
import { Link } from "react-router-dom";
function Home({ prop: results, resetFilters: resetFilters }) {
  return (
    <div className="w-full">
      <div className="mt-10 mx-12 grid grid-cols-2 md:grid-cols-3 lg:mx-52 gap-4">
        {results &&
          results.map((val) => {
            return (
              <Link
                onClick={resetFilters}
                to={`/about/${val.idx}`}
                key={val.idx}
              >
                <div className="w-full text-2xl text-yellow-500 rounded-xl border border-yellow-400 transition shadow-sm hover:shadow-lg flex flex-col items-center overflow-hidden">
                  <div className="w-full md:h-36 lg:h-40 flex justify-center items-center bg-gradient-to-br from-yellow-400 to-orange-500 hover:from-yellow-300">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${val.idx}.png`}
                    ></img>
                  </div>
                  <div className="bg-white w-full flex justify-center items-center py-5">
                    <p className="text-shadow text-base md:text-lg text-gray-500">
                      {val.name.charAt(0).toUpperCase() + val.name.slice(1)}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
