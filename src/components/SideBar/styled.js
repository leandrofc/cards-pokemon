import styled from "styled-components";

export const Container = styled.nav`
    height: 100vh;
    weight: 20vw;
    background: radial-gradient(82.01% 82.01% at 31.14% -1.67%, #AFE689 0%, #4ACC9C 100%);
    padding: 5% 1.5%;
    display: flex;
    flex-direction: column;
    align-items:center;
    position: fixed;

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const ContainerLogo = styled.div`
    height: 20%;
    display: flex;
    justify-content: flex-end;
`;

export const Logo = styled.img`
    width: 233px;
    height: 94px;
`;