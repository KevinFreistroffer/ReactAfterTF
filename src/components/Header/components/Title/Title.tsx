import * as React from 'react';
import { StyledTitle } from './Title.styled';

export interface ITitleProps {}

export const Title = (props: ITitleProps): JSX.Element => {
  return <StyledTitle>Kevin Freistroffer</StyledTitle>;
};

export default Title;
