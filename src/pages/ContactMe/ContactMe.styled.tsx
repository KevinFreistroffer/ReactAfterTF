import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem 3rem;

  @media only screen and (min-width: 768px) {
    padding: 3rem;
  }

  main {
    ul {
      li {
        font-size: 2rem;
        line-height: 4rem;
      }
    }
  }
`;
