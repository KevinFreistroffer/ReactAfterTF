import styled from 'styled-components/macro';

export const Container = styled.main`
  width: 100%;
  min-height: 100%;
  padding: 1rem;

  @media only screen and (min-width: 576px) {
    padding: 1rem 2rem;
  }

  @media only screen and (min-width: 768px) {
    padding: 2rem;
  }
`;
