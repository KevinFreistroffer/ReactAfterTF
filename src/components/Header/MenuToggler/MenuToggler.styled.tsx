import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const StyledMenuToggler = styled(Button)`
  display: flex;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;