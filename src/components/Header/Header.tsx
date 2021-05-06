import * as React from 'react';
import { StyledHeader } from './Header.styled';
import Title from './components/Title';
import MenuToggler from './components/MenuToggler';
import Navigation from './components/Navigation';
import { NavigationLink } from './components/Navigation/Navigation.styled';
import { useTranslation } from 'react-i18next';

export interface DefaultRootState {
  key: string;
}

export interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  const { t } = useTranslation();
  return (
    <StyledHeader>
      <Title />
      {/* 320 - 767px menu toggler */}
      <MenuToggler />
      {/* 768px+ navigation menu */}
      <Navigation>
        <NavigationLink to='/' className='mr-l1'>
          {t('page_title.Home', 'Home')}
        </NavigationLink>
        <NavigationLink to='/sign-in'>
          {t('page_title.Sign In', 'Sign In')}
        </NavigationLink>
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
