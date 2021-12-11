import logo from "../../assets/logo.png"
import { Container,ContainerLogo, Logo, Nav, MenuItem } from './styled';
import { Link } from "react-router-dom";

function SideBar({page}){
    return(
        <Container>
            <ContainerLogo>
                <Link to="/" style={{textDecoration:"none"}}>
                    <Logo src={logo}/>
                </Link>
            </ContainerLogo>
            <Nav>
                <Link to="/" style={{textDecoration:"none"}}>
                    <MenuItem selected={page === 'AllPokemons'}> All Pokemons </MenuItem>
                </Link>
                <Link to="/my-deck" style={{textDecoration:"none"}}>
                    <MenuItem selected={page === 'MyDeck'}> My deck </MenuItem>
                </Link>
                <Link to="/my-favorites" style={{textDecoration:"none"}}>
                    <MenuItem selected={page === 'MyFavorites'}> My favorites </MenuItem>
                </Link>
            </Nav>
        </Container>
    )
}

export default SideBar;