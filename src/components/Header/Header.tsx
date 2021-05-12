import * as React from 'react';
import { StyledHeader } from './Header.styled';
import Title from './components/Title';
import MenuToggler from './components/MenuToggler';
import Navigation from './components/Navigation';
import { NavigationLink } from './components/Navigation/Navigation.styled';
import { useTranslation } from 'react-i18next';
import LanguageSelect from '../Header/components/LanguageSelect';
import { AppContext } from '../../context/';

export interface DefaultRootState {
  key: string;
}

export interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  const { toggleDrawer } = React.useContext(AppContext);
  const { t } = useTranslation();
  return (
    <StyledHeader>
      <label htmlFor='select-language'>
        Select language
        <LanguageSelect />
      </label>

      <Title />
      <div className='flex align-items-center'>
        <MenuToggler onClick={toggleDrawer} />

        <Navigation>
          <NavigationLink exact to='/' className='mr-l3'>
            {t('page_title.Home', 'Home')}
          </NavigationLink>{' '}
          <NavigationLink to='/portfolio' className='mr-l3'>
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
