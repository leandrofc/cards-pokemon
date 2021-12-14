import styled from "styled-components";

export const Container = styled.div`
   padding: 3% 5%;
   margin-left: 20vw;
   width: 100%;

   @media (max-width: 1000px) {
      padding: 0;
      margin:0;
    }
`;

export const AllCards = styled.div`
  margin: 3% 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  p{
    color: grey;
    font-size: 16px;
    margin-right: 10%;
    margin-top: 12%;
  }

  @media (max-width: 1000px) {
    justify-content: center;
    p{
      margin-right: 0;
      margin-top: 20%;
    }
  }
`;