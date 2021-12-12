import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 7% 3% 7% 0;
    
    @media (max-width: 1000px) {
        align-items: center;
    }
`;

export const Title = styled.p`
    font-weight: bold;
    font-size: 20px;
    color: #4ACC9C;

    @media (max-width: 1000px) {
        margin-bottom: 3%;
    }
`;

export const Description = styled.p`
    font-weight: normal;
    font-size: 15px;
    color: #8E8E8E;

    @media (max-width: 1000px) {
        align-items: center;
        text-align:center;
        font-size: 14px;
    }
`;
