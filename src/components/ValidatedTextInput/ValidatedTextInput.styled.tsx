import styled from 'styled-components/macro';

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

export const FormControl = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const Label = styled.label``;

export const Input = styled.input`
  padding: 0.5rem;
  ${(props: { error: string | JSX.Element | undefined }) => {
    if (props.error) {
      return { 'border-bottom': '2px solid red' };
    }
  }};
`;

export const ErrorMessage = styled.p`
  color: red;
`;
