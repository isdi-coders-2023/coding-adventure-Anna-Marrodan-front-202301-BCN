import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: #cccf18;
  width: 323px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  border: none;

  :disabled {
    opacity: 57%;
  }

  @media (min-width: 786px) {
    height: 57px;
  }
`;
