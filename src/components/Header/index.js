import { useState } from 'react';
import InputResearch from '../InputResearch';
import logoSmall from "../../assets/logoSmall.png"
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import MenuMobile from "../MenuMobile";

import { Container,Title, Head, Logo } from './styled';

function Header({title, clear, value, onChange, onClose}){
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return(
        <>
            {isOpenMenu && <MenuMobile setIsOpenMenu={setIsOpenMenu}/>}
            <Container>
                <Head>
                    <Link to="/" style={{textDecoration:"none"}}>
                        <Logo src={logoSmall}/>
                    </Link>
                    <FiMenu color={"#fff"} size={35} onClick={()=>{setIsOpenMenu(true)}}/>
                </Head>
                
                {   
                    !clear &&
                        <>
                            <Title>
                                {title}
                            </Title>
                            <InputResearch value={value} onChange={onChange} onClose={onClose}/>
                        </> 
                }
            </Container>
        </>
    )
}

export default Header;