import Card from "../../components/Card";
import Header from "../../components/Header"
import SideBar from "../../components/SideBar";
import { Container, AllCards} from './styled';


function MyFavorites(){
    return(
        <div style={{display:"flex"}}>
        <SideBar page={'MyFavorites'}/>
        <Container>
            <Header title="My favorites"/>
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

export default MyFavorites;