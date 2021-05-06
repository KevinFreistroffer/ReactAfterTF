import * as React from 'react';
import { Container } from './PageHeader.styled';

export interface IPageHeaderProps {
  children: React.ReactNode;
}

export default function PageHeader(props: IPageHeaderProps) {
  return <Container>{props.children}</Container>;
}
