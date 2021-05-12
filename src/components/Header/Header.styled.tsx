import styled from 'styled-components/macro';
import { Container as StyledLanguageSelect } from './components/LanguageSelect/LanguageSelect.styled';

export const StyledHeader = styled.header.attrs({
  className: 'full-width ',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 2rem 1rem;
  background-color: white;

  label {
    display: none;
  }

  @media only screen and (min-width: 576px) {
  }

  @media only screen and (min-width: 768px) {
    flex-direction: column;

    label {
      display: flex;
      flex-direction: column;
      align-self: flex-end;
    }
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
  }

  @media only screen and (min-width: 1440px) {
  }
`;
