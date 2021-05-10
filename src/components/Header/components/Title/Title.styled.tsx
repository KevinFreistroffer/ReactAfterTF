import styled from 'styled-components/macro';

export const StyledTitle = styled.h1`
  font-size: 1.3125rem; // 21px
  font-size: 6vw;
  line-height: 6vw;
  text-transform: uppercase;
  font-weight: bold;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
    line-height: 2rem;
  }
`;
