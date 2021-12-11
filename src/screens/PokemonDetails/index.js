import Card from "../../components/Card";
import Header from "../../components/Header"
import SideBar from "../../components/SideBar";
import { FiChevronLeft } from "react-icons/fi";
import ClefairyBig from "../../assets/clefairyBig.png"
import { Link } from "react-router-dom";

import { Container, TopArea, Content, Pokemon, PokemonImage, NamePokemon, Attacks, ListAtacks, TitleList} from './styled';
import AttackItem from "../../components/AttackIntem";


function PokemonDetails(){
    return(
        <div style={{display:"flex"}}>
        <SideBar page={'AllPokemons'}/>
        <Container>
            <Link to="/" style={{textDecoration:"none"}}>
                <FiChevronLeft size={52} color={"#000"}/>
            </Link>
            <Content>
                <Pokemon>
                    <PokemonImage src={ClefairyBig}/>
                    <NamePokemon>Clefairy</NamePokemon>
                </Pokemon>
                <Attacks>
                    <TitleList>Attack list</TitleList>
                    <ListAtacks>
                        <AttackItem/>
                        <AttackItem/>
                        <AttackItem/>
                        <AttackItem/>
                        <AttackItem/>
                        <AttackItem/>
                        <AttackItem/>
                        <AttackItem/>
                    </ListAtacks>
                </Attacks>
            </Content>
        </Container>
        </div>
    )
}

export default PokemonDetails;