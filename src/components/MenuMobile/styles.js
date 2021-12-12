import styled from "styled-components";

export const Container = styled.nav`
    height: 100vh;
    weight: 100vw;
    background: radial-gradient(82.01% 82.01% at 31.14% -1.67%, #AFE689 0%, #4ACC9C 100%);
    display: flex;
    flex-direction: column;
    align-items:center;
    position: fixed;

    @media (min-width: 1000px) {
        display: none;
    }
`;

export const ClosedArea = styled.div`
    display: flex;
    justify-content: end;
    align-items:right;
    margin-top: 10%;
    margin-left: 75%;
`;

export const ContainerLogo = styled.div`
    height: 20%;
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: 5%;
`;

export const Logo = styled.img`
    width: 233px;
    height: 94px;
`;