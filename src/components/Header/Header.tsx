import * as React from 'react';
import { StyledHeader } from './Header.styled';
import Title from './components/Title';
import MenuToggler from './components/MenuToggler';
import Navigation from './components/Navigation';
import { NavigationLink } from './components/Navigation/Navigation.styled';
import { useTranslation } from 'react-i18next';
import LanguageSelect from '../Header/components/LanguageSelect';
//import InputLabel from '@material-ui/core/InputLabel';

export interface DefaultRootState {
  key: string;
}

export interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  const { t } = useTranslation();
  return (
    <StyledHeader className='full-width flex-column justify-content-space-between align-items-center'>
      <LanguageSelect />

      <div className='flex justify-content-space-between full-width'>
        <Title />
        {/* 320 - 767px menu toggler */}

        {/* 768px+ navigation menu */}

        <div className='flex align-items-center'>
          <MenuToggler />

          <Navigation className='mr-l1'>
            <NavigationLink exact to='/' className='mr-l3'>
              {t('page_title.Home', 'Home')}
            </NavigationLink>{' '}
            <NavigationLink to='/portfolio'>
              {t('page_title.Portfolio', 'Portfolio')}
            </NavigationLink>
            {/* <NavigationLink to='/sign-in'>
              {t('page_title.Sign In', 'Sign In')}
            </NavigationLink> */}
          </Navigation>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
