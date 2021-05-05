import * as React from 'react';
import { StyledHeader } from './Header.styled';
import Title from './Title/Title';
import MenuToggler from './MenuToggler';
import Navigation from './components/Navigation';
import { StyledNavigationLink } from './components/Navigation/Navigation.styled';

export interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  return (
    <StyledHeader>
      <Title />
      {/* 320 - 767px menu toggler */}
      <MenuToggler />
      {/* 768px+ navigation menu */}
      <Navigation>
        <StyledNavigationLink to='/'>Home</StyledNavigationLink>
        <StyledNavigationLink to='/register'>Register</StyledNavigationLink>
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
