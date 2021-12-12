import styled from "styled-components";

export const Nav = styled.ul`
    height: 80%;
    display: flex;
    align-items: left;
    flex-direction: column;
    justify-content: center; 

    @media (max-width: 1000px) {
        align-items: center;
        margin-bottom: 50%;
    }
`;

export const MenuItem = styled.li`
    margin-top: 40px;
    color: ${(props) => (props.selected ? "#21386E" : "#fff")};
    font-size:20px;
    list-style-type: none;
    font-weight: bold;
    text-decoration: ${(props) => (props.selected ? "underline" : "none")};

    cursor: pointer;
    transition: all ease-in-out 0.3s;

    &&:hover {
        color: #21386E;

    }

    @media (max-width: 1000px) {
        font-size: 30px;
    }
`;