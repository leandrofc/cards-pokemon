import { useEffect, useState } from "react";
import { FiPlusSquare, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from "../../services/api";

import { Container, TopArea, PokemonImage, TextArea, Name, Type } from './styled';

function Card({pokemon}){
    const [isLoading, setIsLoading] = useState();
    const [pokemonInfo, setPokemonInfo] = useState();
    
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
        <Link to={`/pokemon-details/${pokemon}`} style={{textDecoration:"none"}}>
            <Container>
                <TopArea>
                    <FiPlusSquare color={"#C4C4C4"} size={24}/>
                    <FiStar color={"#FFCB05"} size={24} style={{marginLeft: 5}}/>
                </TopArea>
                <PokemonImage src={pokemonInfo?.sprites?.other?.["official-artwork"]?.front_default}/>
                <TextArea>
                    <Name>
                        {pokemonInfo?.name}
                    </Name>
                    <Type>
                        {pokemonInfo?.types[0]?.type?.name}
                    </Type>
                </TextArea>
            </Container>
        </Link>
    )
}

export default Card;