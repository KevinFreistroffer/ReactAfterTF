import styled from 'styled-components/macro';

interface ContainerProps {
  borderColor: string;
}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  max-width: 768px;
  padding: 2rem;
  margin: 2rem auto;
  background-color: rgba(0, 0, 0, 0.015);
  line-height: 2rem;
  transition: all 0.1s linear;
  border: 0.125rem solid ${(props: ContainerProps) => props.borderColor};
  border-radius: 0.25rem;
  box-shadow: 0 0 8px #cccccc;

  @media only screen and (min-width: 768px) {
    border: none;
    border-left: 0.25rem solid ${(props: ContainerProps) => props.borderColor};
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.035);
  }

  .summary-ul {
    list-style: disc;
    list-style-position: inside;
  }
`;

export const UL = styled.ul``;
export const LI = styled.li`
  strong {
    display: block;
  }

  &.contractor {
    > strong {
      display: none;
    }
  }


  &.client {
    span {
      //font-weight: bold;
    }
  }

  @media only screen and (min-width: 576px) {
    strong {
      display: inline-block;
    }
  }

  @media only screen and (min-width: 768px) {
    &.employment-period {
      display: none;
    }

    &.contractor {

      > strong {
        display: inherit;
      }
    }
  }
`;
