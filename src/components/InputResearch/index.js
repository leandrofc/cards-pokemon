import { FiSearch, FiX } from "react-icons/fi";

import { Container, Input} from './styled';


function InputResearch({value, onChange, onClose}){
    return(
        <Container>
            <FiSearch color={"#C4C4C4"} className="icon"/>
            <Input 
                placeholder="Enter the name of a Pokemon"
                value={value}
                onChange={e => onChange(e.target.value)}

            />
            <FiX color={"#000"} onClick={()=>onClose(false)} className="icon" style={!value && {opacity:"0"}}/>
        </Container>
    )
}

export default InputResearch;