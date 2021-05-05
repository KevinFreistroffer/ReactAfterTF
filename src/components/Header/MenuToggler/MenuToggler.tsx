import * as React from 'react';
import Icon from '@material-ui/core/Icon';

import { StyledMenuToggler } from './MenuToggler.styled';

export interface IMenuTogglerProps {
}

export const MenuToggler = (props: IMenuTogglerProps): JSX.Element => {
  return (
    <StyledMenuToggler>
      <Icon>menu</Icon>
    </StyledMenuToggler>
  );
}

export default MenuToggler;
