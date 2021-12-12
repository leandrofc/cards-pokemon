import logo from "../../assets/logo.png"
import { Container,ContainerLogo, Logo } from './styled';
import { Link } from "react-router-dom";
import Menu from "../Menu";

function SideBar({page}){
    return(
        <Container>
            <ContainerLogo>
                <Link to="/" style={{textDecoration:"none"}}>
                    <Logo src={logo}/>
                </Link>
            </ContainerLogo>
            <Menu page={page}/>
        </Container>
    )
}

export default SideBar;