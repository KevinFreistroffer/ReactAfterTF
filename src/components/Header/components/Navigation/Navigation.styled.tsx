import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavigation = styled.nav`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

export const StyledNavigationLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  margin: 1rem auto;
`;
