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
    </Container>
  );
};

export default MenuToggler;
