import React, { useEffect, useState } from "react";
import { Router, useParams, Link } from "react-router-dom";

function About() {
  const { slug } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [slug]);

  return (
    <React.Fragment>
      <div className="w-8/12 sm:w-5/12 m-auto bg-yellow-100 mt-4 shadow-inner flex justify-center flex-col items-center rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-yellow-400 to-pink-400 w-full flex justify-center p-4">
          <h3 className="text-md sm:text-xl text-white uppercase font-bold">
            {pokemon ? pokemon.name : "Loading..."}
          </h3>
        </div>
        {pokemon && (
          <div className="grid grid-cols-1 sm:grid-cols-2 display flex justify-center items-center">
            <img
              className="select-none"
              src={pokemon.sprites["front_default"]}
              alt=""
            />
            <img
              className="select-none"
              src={pokemon.sprites["back_default"]}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <Link
          className="bg-gradient-to-r from-yellow-400 to-pink-400 px-10 py-4 rounded-full text-white mt-5 shadow-md transform transition hover:scale-105 focus:ring-2 focus:ring-pink-500"
          to="/"
        >
          Catch 'em
        </Link>
      </div>
    </React.Fragment>
  );
}

export default About;
