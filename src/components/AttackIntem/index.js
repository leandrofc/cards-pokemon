import { useEffect, useState } from 'react';
import { Container, Title, Description } from './styles';
import api from '../../services/api';

function AttackItem(moveName){
    const [isLoading, setIsLoading] = useState();
    const [moveInfo, setMoveInfo] = useState();
    
    async function loadData() {
        setIsLoading(true)
        const response = await api.get(`/move/${moveName.moveName}`);
        setMoveInfo(response.data);
        setIsLoading(false)
    }

    useEffect(() => {
        loadData();
    }, [])

    return(
        <Container>
            <Title>{moveName?.moveName}</Title>
            <Description>{moveInfo?.effect_entries[0]?.short_effect}</Description>
        </Container>
    )
}

export default AttackItem