import styled from 'styled-components';
import { Drawer, Button } from '@material-ui/core';

export const StyledMenuToggler = styled(Button)`
  display: flex;

  @media only screen and (min-width: 768px) {
    display: none;s
  }
`;

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 242px;
    padding: 1rem 0;
  }
`;

export const StyledUL = styled.ul`
  display: block;
  width: 100%;
  padding: 0;
`;

export const StyledLI = styled.li`
  width: 100%;
  padding: 0;
`;
