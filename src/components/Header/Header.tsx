import * as React from 'react';
import { StyledHeader } from './Header.styled';
import Title from './components/Title';
import MenuToggler from './components/MenuToggler';
import Navigation from './components/Navigation';
import { NavigationLink } from './components/Navigation/Navigation.styled';

export interface DefaultRootState {
  key: string;
}

export interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  return (
    <StyledHeader>
      <Title />
      {/* 320 - 767px menu toggler */}
      <MenuToggler />
      {/* 768px+ navigation menu */}
      <Navigation>
        <NavigationLink to='/'>Home</NavigationLink>
        <NavigationLink to='/register'>Register</NavigationLink>
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
