import Card from "../../components/Card";
import Header from "../../components/Header"
import SideBar from "../../components/SideBar";
import { Container, AllCards} from './styled';


function MyDeck(){
    return(
        <div style={{display:"flex"}}>
        <SideBar page={'MyDeck'}/>
        <Container>
            <Header title="My deck"/>
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

export default MyDeck;