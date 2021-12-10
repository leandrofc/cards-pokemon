import { FiSearch } from "react-icons/fi";

import { Container, Input} from './styled';


function InputResearch(){
    return(
        <Container>
            <FiSearch color={"#C4C4C4"}/>
            <Input placeholder="Enter the name of a Pokemon"/>
        </Container>
    )
}

export default InputResearch;