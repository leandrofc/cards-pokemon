import Card from "../../components/Card";
import Header from "../../components/Header"
import SideBar from "../../components/SideBar";
import { Container, AllCards} from './styled';

function AllPokemons(){
    return(
        <div style={{display:"flex", width: "100%"}}>
        <SideBar page={'AllPokemons'}/>
        <Container>
            <Header title="All Pokemons"/>
            <AllCards>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </AllCards>
        </Container>
        </div>
    )
}

export default AllPokemons;