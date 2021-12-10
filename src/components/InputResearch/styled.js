import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 3px solid #4ACC9C;
  border-radius: 50px;
  padding: 1.5% 2.5%;
  width: 712px;
  align-items: center;
  margin-top: 4%;
`;

export const Input = styled.input`
   border: none;
   width: 400px;
   margin-left: 2.5%;
   font-weight: 400;
   font-weight: normal;
   font-size: 18px;

   ::placeholder {
        color: #C4C4C4;
    }

    :focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`;