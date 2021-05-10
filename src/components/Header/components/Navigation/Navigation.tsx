import * as React from 'react';
import { StyledNavigation } from './Navigation.styled';

export interface IMenuTogglerProps {
  children: React.ReactNode;
  className: string;
}

export const Navigation = (props: IMenuTogglerProps): JSX.Element => {
  return (
    <StyledNavigation color='black' className={props.className}>
      {props.children}
    </StyledNavigation>
  );
};

export default Navigation;
