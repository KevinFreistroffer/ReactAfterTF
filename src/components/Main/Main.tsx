import * as React from 'react';
import { StyledMain } from './Main.styled';

export interface IMainProps {
  children: React.ReactNode;
}

export const Main = (props: IMainProps) => {
  return <StyledMain>{props.children}</StyledMain>;
};

export default Main;
