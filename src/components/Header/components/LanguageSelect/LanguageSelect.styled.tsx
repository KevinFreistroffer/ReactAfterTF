import styled from 'styled-components/macro';
import { Drawer as MatDrawer, Icon as MatIcon } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;

  @media only screen and (min-width: 768px) {
    // position: absolute;
    // top: 2rem;
    // right: 1rem;
    justify-content: flex-end;

    .MuiFormControl-root {
      margin-right: 1rem;
      margin-bottom: 3rem;
    }
  }
`;

export const Icon = styled(MatIcon)`
  font-size: 7vw;
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
