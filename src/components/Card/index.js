import { useEffect, useState } from "react";
import { FiPlusSquare, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { usePokemons } from "../../context/listPokemons";
import ReactTooltip from 'react-tooltip';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, TopArea, PokemonImage, TextArea, Name, Type } from './styled';

function Card({pokemon}){
    const [isLoading, setIsLoading] = useState();
    const [pokemonInfo, setPokemonInfo] = useState();

    const { pokemonFavorites, setPokemonFavorites, pokemonInMyDeck, setPokemonInMyDeck } = usePokemons();

    function addNewPokemonFavorite(pokemon) {
        let pokemons = Array.from(pokemonFavorites);

        const found = pokemons.find(element => element.name === pokemon);

        if(!found){
            pokemons.push({"name": pokemon});
            setPokemonFavorites(pokemons);
        }

        toast.success(`${pokemon} added to favorites!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    function addNewPokemonInMyDeck(pokemon) {
        let myPokemons = Array.from(pokemonInMyDeck);

        const found = myPokemons.find(element => element.name === pokemon);

        if(!found){
            myPokemons.push({"name": pokemon});
            setPokemonInMyDeck(myPokemons);
        }  

        toast.success(`${pokemon} added to the deck!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    
    async function loadData() {
        setIsLoading(true)
        const response = await api.get(`/pokemon/${pokemon}`);
        setPokemonInfo(response.data);
        setIsLoading(false)
    }

    useEffect(() => {
        loadData();
    }, [])

    return(
            <Container>
                <TopArea>
                    <FiPlusSquare 
                        color={"#C4C4C4"} 
                        size={24} 
                        style={{marginLeft: 5, cursor: "pointer", outline: 0}} 
                        onClick={()=>{addNewPokemonInMyDeck(pokemon)}}
                        data-tip="Add card to my deck"
                    />
                    <FiStar 
                        color={"#FFCB05"} 
                        size={24} 
                        style={{marginLeft: 5, cursor: "pointer", outline: 0}} 
                        onClick={()=>{addNewPokemonFavorite(pokemon)}}
                        data-tip="Add card to my favorites"
                    />
                </TopArea>
                <Link to={`/pokemon-details/${pokemon}`} style={{textDecoration:"none"}}>
                <PokemonImage src={pokemonInfo?.sprites?.other?.["official-artwork"]?.front_default}/>
                
                <TextArea>
                    <Name>
                        {pokemonInfo?.name}
                    </Name>
                    <Type>
                        {pokemonInfo?.types[0]?.type?.name}
                    </Type>
                </TextArea>
                </Link>
                <ReactTooltip backgroundColor={"radial-gradient(82.01% 82.01% at 31.14% -1.67%, #AFE689 0%, #4ACC9C 100%)"}/>
            </Container>
            )
}

export default Card;