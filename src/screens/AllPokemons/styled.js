import styled from "styled-components";

export const Container = styled.div`
   padding: 3% 5%;
   margin-left: 20vw;

   @media (max-width: 1000px) {
      padding: 0;
      margin:0;
    }
`;

export const AllCards = styled.div`
  /* .scroll{ */
    margin: 3% 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 1000px) {
      justify-content: center;
    }
  /* } */
`;