import * as React from 'react';
import { StyledNavigation } from './Navigation.styled';

export interface IMenuTogglerProps {
  children: React.ReactNode;
}

export const Navigation = (props: IMenuTogglerProps): JSX.Element => {
  return <StyledNavigation color='black'>{props.children}</StyledNavigation>;
};

export default Navigation;
