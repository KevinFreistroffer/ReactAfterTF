import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;

  @media only screen and (min-width: 576px) {
    background-color: #eeeeee;
  }

  @media only screen and (min-width: 768px) {
    background-color: #dddddd;
  }

  @media only screen and (min-width: 992px) {
    background-color: #cccccc;
  }

  @media only screen and (min-width: 1200px) {
    background-color: #bbbbbb;
  }

  @media only screen and (min-width: 1440px) {
    background-color: #aaaaaa;
  }
`;
