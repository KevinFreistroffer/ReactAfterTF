import * as React from 'react';
import { Container } from './Main.styled';

export interface IMainProps {
  children: React.ReactNode;
}

export const Main = (props: IMainProps) => {
  return <Container>{props.children}</Container>;
};

export default Main;
