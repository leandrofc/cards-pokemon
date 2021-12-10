import logo from "../../assets/logo.png"
import { Container,ContainerLogo, Logo, Nav, MenuItem } from './styled';

function SideBar(){
    return(
        <Container>
            <ContainerLogo>
                <Logo src={logo}/>
            </ContainerLogo>
            <Nav>
                <MenuItem> All Pokemons </MenuItem>
                <MenuItem> My deck </MenuItem>
                <MenuItem> My favorites </MenuItem>
            </Nav>
        </Container>
    )
}

export default SideBar;