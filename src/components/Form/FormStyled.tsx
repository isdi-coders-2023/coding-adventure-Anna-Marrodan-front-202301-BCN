import styled from "styled-components";

export const FormStyled = styled.form`
  font-size: var(--primaryFontSize);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  padding: 10px;

  .form {
    &__information {
      display: flex;
      flex-direction: column;
      gap: 7px;
    }
    &__input {
      height: 40px;
      width: 325px;
      border-radius: 8px;
      padding: 12px;
      border: none;
      line-height: 19px;
      font-size: inherit;
      border: 1px solid white;
    }
    &__required-text {
      color: var(--warningFontColor);
      padding-top: 3px;
      font-size: inherit;
    }
  }
  @media (min-width: 786px) {
    .form {
      &__input {
        height: 57px;
        width: 830px;
        &--file {
        }
      }
    }
  }
`;
