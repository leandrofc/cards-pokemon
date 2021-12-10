import Card from "../../components/Card";
import Header from "../../components/Header"
import { Container, AllCards} from './styled';


function AllPokemons(){
    return(
        <Container>
            <Header title="All Pokemons"/>
            <AllCards>
                <Card/>
                <Card/>
                <Card/>
            </AllCards>
        </Container>
    )
}

export default AllPokemons;