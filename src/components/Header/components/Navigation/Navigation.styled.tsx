import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavigation = styled.nav`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

export const StyledNavigationLink = styled(Link)`
  margin: 0 1rem;
`;
