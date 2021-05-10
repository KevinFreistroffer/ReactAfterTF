import * as React from 'react';
import { StyledHeader } from './Header.styled';
import Title from './components/Title';
import MenuToggler from './components/MenuToggler';
import Navigation from './components/Navigation';
import { NavigationLink } from './components/Navigation/Navigation.styled';
import { useTranslation } from 'react-i18next';
import LanguageSelect from '../Header/components/LanguageSelect';

export interface DefaultRootState {
  key: string;
}

export interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  const { t } = useTranslation();
  return (
    <StyledHeader>
      <Title />

      {/* Only visible from 768px+ */}
      <LanguageSelect />

      <div className='flex align-items-center'>
        <MenuToggler />

        <Navigation className='mr-l1'>
          <NavigationLink exact to='/' className='mr-l3'>
            {t('page_title.Home', 'Home')}
          </NavigationLink>{' '}
          <NavigationLink to='/portfolio'>
            {t('page_title.Portfolio', 'Portfolio')}
          </NavigationLink>
          <NavigationLink to='/contact-me'>
            {t('page_title.Contact me', 'Contact me')}
          </NavigationLink>
        </Navigation>
      </div>
    </StyledHeader>
  );
};

export default Header;
