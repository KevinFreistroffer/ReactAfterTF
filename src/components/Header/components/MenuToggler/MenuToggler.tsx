import React from 'react';
import { Container, Icon } from './MenuToggler.styled';
// import { NavigationLink } from '../Navigation/Navigation.styled';
// import LanguageSelect from '../LanguageSelect';
// import { useTranslation } from 'react-i18next';

export interface IMenuTogglerProps {
  onClick: (event: any) => void;
}

export const MenuToggler = (props: IMenuTogglerProps): JSX.Element => {
  //const { t } = useTranslation();

  return (
    <Container onClick={props.onClick}>
      <Icon>menu</Icon>
      {/* <Drawer anchor='right' open={isOpen}>
        <Label htmlFor='language-select'>
          {t('Select language', 'Select language')}
        </Label>
        <LanguageSelect className='mb-l1' />
        <UL>
          <LI>
            <NavigationLink exact to='/' onClick={closeDrawer}>
              {t('page_title.Home', 'Home')}
            </NavigationLink>
          </LI>
          <LI>
            <NavigationLink to='/portfolio' onClick={closeDrawer}>
              {t('page_title.Portfolio', 'Portfolio')}
            </NavigationLink>
          </LI>{' '}
          <LI>
            <NavigationLink to='/contact-me' onClick={closeDrawer}>
              {t('page_title.Contact me', 'Contact me')}
            </NavigationLink>
          </LI>
        </UL>
      </Drawer> */}
    </Container>
  );
};

export default MenuToggler;
