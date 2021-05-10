import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const StyledNavigation = styled.nav`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

export const NavigationLink = styled(NavLink).attrs({
  activeStyle: {
    color: 'red',
  },
})`
  display: inline-block;
  width: auto;
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  color: black;

  &:focus,
  &:visited,
  &:active,
  &:link {
    color: black;
  }
`;
