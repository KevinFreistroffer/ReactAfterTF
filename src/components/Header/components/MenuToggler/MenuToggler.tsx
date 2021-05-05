import React, { useState, useEffect } from 'react';
import Icon from '@material-ui/core/Icon';

import {
  StyledMenuToggler,
  StyledDrawer,
  StyledUL,
  StyledLI,
} from './MenuToggler.styled';
import { StyledNavigationLink } from '../Navigation/Navigation.styled';

export interface IMenuTogglerProps {}

export const MenuToggler = (props: IMenuTogglerProps): JSX.Element => {
  const [open, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    // TODO typeof event?
    window.onresize = (event: any) => {
      if (window.innerWidth >= 768) {
        console.log('window.innerWidth > 768');
        if (open) {
          console.log('is open. calling setIsOpen(false)');
          setIsOpen(false);
        }
      }
    };
  }, [open]);

  const toggleDrawer = (event: any) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsOpen(!open);
  };

  return (
    <StyledMenuToggler onClick={toggleDrawer}>
      <Icon>menu</Icon>
      <StyledDrawer anchor='right' open={open}>
        <StyledUL>
          <StyledLI>
            <StyledNavigationLink to='/'>Home</StyledNavigationLink>
          </StyledLI>
          <StyledLI>
            <StyledNavigationLink to='/register'>Register</StyledNavigationLink>
          </StyledLI>
        </StyledUL>
      </StyledDrawer>
    </StyledMenuToggler>
  );
};

export default MenuToggler;
