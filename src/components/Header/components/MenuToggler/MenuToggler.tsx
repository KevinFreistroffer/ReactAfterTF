import React, { useState, useEffect } from 'react';
import { Container, Icon, Drawer, UL, LI, Label } from './MenuToggler.styled';
import { NavigationLink } from '../Navigation/Navigation.styled';
import LanguageSelect from '../LanguageSelect';

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
    <Container onClick={toggleDrawer}>
      <Icon>menu</Icon>
      <Drawer anchor='right' open={open}>
        <Label htmlFor='language-select'>Change language</Label>
        <LanguageSelect className='mb-l1' />
        <UL>
          <LI>
            <NavigationLink exact to='/'>
              Home
            </NavigationLink>
          </LI>
          <LI>
            <NavigationLink to='/portfolio'>Portfolio</NavigationLink>
          </LI>
        </UL>
      </Drawer>
    </Container>
  );
};

export default MenuToggler;
