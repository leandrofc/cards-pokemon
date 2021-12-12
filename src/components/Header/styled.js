import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 7%;

    @media (max-width: 1000px) {
      align-items: center
    }
`;

export const Head = styled.h1`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: radial-gradient(82.01% 82.01% at 31.14% -1.67%, #AFE689 0%, #4ACC9C 100%);
    padding: 5% 10%;
    margin-bottom: 5%;

    @media (min-width: 1000px) {
        display: none;
    }
`;

export const Logo = styled.img`
    
`;

export const Title = styled.h1`
    font-size: 36px
    font-weight: bold;
    color: black;

    @media (max-width: 1000px) {
        font-size: 26px
    }
`;