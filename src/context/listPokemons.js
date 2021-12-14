import React, { createContext, useState, useContext, useEffect } from "react";

const ListPokemons = createContext();

export default function PokemonsProvider({ children }) {
    const [pokemonFavorites, setPokemonFavorites] = useState(() => {
      const storagedPokemonFavorites = localStorage.getItem(
        '@CardsPokemons:pokemonFavorites'
      );
      if (storagedPokemonFavorites) {
        return JSON.parse(storagedPokemonFavorites);
      }
      return [];
    });

    const [pokemonInMyDeck, setPokemonInMyDeck] = useState(() => {
      const storagedpokemonInMyDeck = localStorage.getItem(
        '@CardsPokemons:pokemonInMyDeck'
      );
      if (storagedpokemonInMyDeck) {
        return JSON.parse(storagedpokemonInMyDeck);
      }
      return [];
    });

  useEffect(() => {
    localStorage.setItem(
      '@CardsPokemons:pokemonFavorites',
      JSON.stringify(pokemonFavorites)
    );
  }, [pokemonFavorites]);

  useEffect(() => {
    localStorage.setItem(
      '@CardsPokemons:pokemonInMyDeck',
      JSON.stringify(pokemonInMyDeck)
    );
  }, [pokemonInMyDeck]);

    return (
      <ListPokemons.Provider
        value={{
            pokemonFavorites, 
            setPokemonFavorites,
            pokemonInMyDeck, 
            setPokemonInMyDeck
        }}
      >
        {children}
      </ListPokemons.Provider>
    );
  }

  export function usePokemons() {
    const context = useContext(ListPokemons);
    if (!context) throw new Error("useCount must be used within a CountProvider");
    const { 
        pokemonFavorites, 
        setPokemonFavorites, 
        pokemonInMyDeck, 
        setPokemonInMyDeck 
    } = context;
    
    return {
        pokemonFavorites, setPokemonFavorites, pokemonInMyDeck, setPokemonInMyDeck
    };
  }
  