import styled from "styled-components";

export const Container = styled.div`
   padding: 4% 6%;
   margin-left: 20vw;

   @media (max-width: 1000px) {
      padding: 0;
      margin:0; 

      .icon{
        margin-left: 5%;
        font-size: 5px;
        margin-top: -7%;
      }
    }
`;

export const Content = styled.div`
  display: flex;
  width: 900px;
  height: 100%;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1000px) {
     flex-direction: column;
     width: auto;
  }
`;

export const Pokemon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
     flex-direction: column-reverse;
     width: auto;
  }
`;

export const PokemonImage = styled.img`
    width: 320px;
    height: 320px;

    @media (max-width: 1000px) {
      width: 250px;
      height: 250px;
    }
`;

export const NamePokemon = styled.p`
  font-weight: bold;
  font-size: 36px;

  @media (max-width: 1000px) {
    font-size: 26px;
    margin-bottom: 5%;
  }
`;

export const Attacks = styled.div`
  display: flex;
  flex-direction: column;
  weight: 100%;
  height: 400px;
  align-items: left;

  @media (max-width: 1000px) {
    align-items: center;
    height: auto;
  }
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

  @media (max-width: 1000px) {
    overflow-y: hidden;
    height: auto;
  }

`;

export const TitleList = styled.p`
  font-weight: normal;
  font-size: 30px;

  @media (max-width: 1000px) {
    font-size: 22px;
    margin-top: 20%;
  }
`;