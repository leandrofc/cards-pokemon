import { useEffect, useState } from "react";
import Header from "../../components/Header"
import SideBar from "../../components/SideBar";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from '../../services/api';

import { Container, Content, Pokemon, PokemonImage, NamePokemon, Attacks, ListAtacks, TitleList} from './styled';
import AttackItem from "../../components/AttackIntem";
import { useParams } from "react-router-dom";

function PokemonDetails(){
    const { name } = useParams();

    const [isLoading, setIsLoading] = useState();
    const [pokemonInfo, setPokemonInfo] = useState();
    
    async function loadData() {
        setIsLoading(true)
        const response = await api.get(`/pokemon/${name}`);
        setPokemonInfo(response.data);
        setIsLoading(false)
    }

    useEffect(() => {
        loadData();
    }, [])


    return(
        <div style={{ width: "100%", justifyContent:"center"}}>
        <SideBar page={'AllPokemons'}/>
        <Container>
            <Header clear="clear"/>
            <Link to="/" style={{textDecoration:"none"}} >
                <FiChevronLeft size={52} color={"#000"} className="icon"/>
            </Link>
            <Content>
                <Pokemon>
                    <PokemonImage src={pokemonInfo?.sprites?.other?.["official-artwork"]?.front_default}/>
                    <NamePokemon>{name}</NamePokemon>
                </Pokemon>
                <Attacks>
                    <TitleList>Attack list</TitleList>
                    <ListAtacks>
                        {
                            pokemonInfo?.moves?.map(move => (
                                <AttackItem moveName={move?.move?.name}/>
                            ))
                        }
                    </ListAtacks>
                </Attacks>
            </Content>
        </Container>
        </div>
    )
}

export default PokemonDetails;