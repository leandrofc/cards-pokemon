import InputResearch from '../InputResearch';
import { Container,Title } from './styled';

function Header({title}){
    return(
        <Container>
            <Title>
                {title}
            </Title>
            <InputResearch/>
        </Container>
    )
}

export default Header;