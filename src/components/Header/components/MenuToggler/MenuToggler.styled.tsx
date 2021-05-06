import styled from 'styled-components';
import { Drawer as MatDrawer, Button } from '@material-ui/core';

export const Container = styled(Button)`
  display: flex;

  @media only screen and (min-width: 768px) {
    display: none;s
  }
`;

export const Drawer = styled(MatDrawer)`
  .MuiDrawer-paper {
    width: 242px;
    padding: 1rem 0;
  }
`;

export const UL = styled.ul`
  display: block;
  width: 100%;
  padding: 0;
`;

export const LI = styled.li`
  width: 100%;
  padding: 0;
`;
