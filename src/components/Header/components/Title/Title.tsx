import * as React from 'react';
import styled from 'styled-components';

export interface IMenuTogglerProps {}

const StyledDeleteThis = styled.div`
  width: 11rem;
  height: 4rem;
  background-color: red;
`;

export const Navigation = (props: IMenuTogglerProps): JSX.Element => {
  return <StyledDeleteThis />;
};

export default Navigation;
