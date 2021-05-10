import styled from 'styled-components/macro';
import { Container as StyledLanguageSelect } from './components/LanguageSelect/LanguageSelect.styled';

export const StyledHeader = styled.header`
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  background-color: white;

  .MuiFormControl-root,
  ${StyledLanguageSelect} {
    display: none;
  }

  @media only screen and (min-width: 576px) {
  }

  @media only screen and (min-width: 768px) {
    .MuiFormControl-root,
    ${StyledLanguageSelect} {
      display: inherit;
    }
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
  }

  @media only screen and (min-width: 1440px) {
  }
`;
