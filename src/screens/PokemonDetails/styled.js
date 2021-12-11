import styled from "styled-components";

export const Container = styled.div`
   padding: 4% 6%;
   margin-left: 20vw;
`;

export const TopArea = styled.div`
  /* height: 10%;
  weight: 100%; */
`;

export const Content = styled.div`
  display: flex;
  width: 900px;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const Pokemon = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  justify-content: space-between;
  align-items: center;
`;

export const PokemonImage = styled.img`
    width: 320px;
    height: 320px;
`;

export const NamePokemon = styled.p`
  font-weight: bold;
  font-size: 36px;
`;

export const Attacks = styled.div`
  display: flex;
  flex-direction: column;
  weight: 100%;
  height: 400px;
  align-items: left;
`;

export const ListAtacks = styled.div`
  display: flex;
  flex-direction: column;
  weight: 100%;
  height: 400px;
  align-items: center;
  overflow-y: scroll;
  

  ::-webkit-scrollbar{
    width: 9px;
    border: none;
  }

  ::-webkit-scrollbar-thumb{
    background: #C4C4C4;
    border-radius: 6px;
  }

`;

export const TitleList = styled.p`
  font-weight: normal;
  font-size: 30px;
`;