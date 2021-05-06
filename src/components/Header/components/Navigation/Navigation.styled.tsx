import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavigation = styled.nav`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

export const NavigationLink = styled(Link)`
  display: inline-block;
  width: auto;
`;
