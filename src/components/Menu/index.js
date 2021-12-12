
import { Nav, MenuItem } from './styles';
import { Link } from "react-router-dom";

function Menu({page}){
    return(
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
    )
}

export default Menu;