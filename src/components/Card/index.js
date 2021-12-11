import Clefairy from "../../assets/clefairy.png"
import { FiPlusSquare, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, TopArea, PokemonImage, TextArea, Name, Type } from './styled';

function Card(){
    return(
        <Link to="/pokemon-details" style={{textDecoration:"none"}}>
            <Container>
                <TopArea>
                    <FiPlusSquare color={"#C4C4C4"} size={24}/>
                    <FiStar color={"#FFCB05"} size={24} style={{marginLeft: 5}}/>
                </TopArea>
                <PokemonImage src={Clefairy}/>
                <TextArea>
                    <Name>
                        Clefairy
                    </Name>
                    <Type>
                        Fairy
                    </Type>
                </TextArea>
            </Container>
        </Link>
    )
}

export default Card;