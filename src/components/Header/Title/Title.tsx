
import * as React from 'react';
import { StyledTitle } from './Title.styled';
import { Link } from 'react-router-dom';

export interface ITitleProps {
}

export const Title = (props: ITitleProps): JSX.Element => {
  return (
    <StyledTitle>
      <Link to="/">ReactReduxApp</Link>
    </StyledTitle>
  );
}

export default Title;
