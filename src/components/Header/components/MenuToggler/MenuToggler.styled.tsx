import styled from 'styled-components/macro';
import { Drawer as MatDrawer, Icon as MatIcon } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  width: auto;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const Icon = styled(MatIcon)`
  font-size: 7vw;
`;

export const Drawer = styled(MatDrawer)`
  .MuiDrawer-paper {
    width: 242px;
    padding: 1rem 2rem;
  }
`;

export const UL = styled.ul`
  display: block;
  width: 100%;
  padding: 0;
`;

export const LI = styled.li`
  width: 100%;
  padding: 1rem 0;
`;

export const Label = styled.label`
  font-size: 0.75rem;
`;
