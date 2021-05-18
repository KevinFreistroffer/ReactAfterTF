import styled from 'styled-components/macro';

export const Container = styled.div`
  display: block;
  width: 100%;
  font-size: 2rem;

  h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
    text-align: left;
    //font-family: 'Big Shoulders Inline Text', cursive;

    span {
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
