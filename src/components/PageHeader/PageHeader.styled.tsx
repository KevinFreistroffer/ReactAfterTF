import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  font-size: 2rem;

  h1 {
    text-align: center;
    margin-bottom: 4rem;

    @media only screen and (min-width: 768px) {
      text-align: left;
    }
  }
`;
