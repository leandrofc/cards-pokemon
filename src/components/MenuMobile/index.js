import logo from "../../assets/logo.png"
import { Container,ContainerLogo, Logo, ClosedArea } from './styles';
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import Menu from "../Menu";

function MenuMobile({page, setIsOpenMenu}){
    return(
        <Container>
            <ClosedArea>
                <FiX color={"#fff"} size={40} onClick={()=>{setIsOpenMenu(false)}}/>
            </ClosedArea>
            <ContainerLogo>
                <Link to="/" style={{textDecoration:"none"}}>
                    <Logo src={logo}/>
                </Link>
            </ContainerLogo>
            <Menu page={page} isMobile={true}/>
        </Container>
    )
}

export default MenuMobile;