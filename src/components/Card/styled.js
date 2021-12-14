import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 256px;
    height: 314px;
    background: #E9FFDA;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 15%;
`;

export const TopArea = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 92%;
    margin: 4%;
`;

export const PokemonImage = styled.img`
    width: 170px;
    height: 170px;
`;

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 80%;
    margin-top: 10%;
    margin-left:-10%;
`;

export const Name = styled.h2`
    font-size: 24px;
    font-weight: bold;
    color: black;
`;

export const Type = styled.h3`
    font-size: 12px;
    font-weight: bold;
    color: #4ACC9C;
`;