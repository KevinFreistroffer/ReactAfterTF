import * as React from 'react';
import PageHeader from '../../components/PageHeader';
import { StyledHome } from './Home.styled';

export interface IHomeProps {}

export const Home = (props: IHomeProps) => {
  return (
    <StyledHome>
      <PageHeader>
        <h1>Welcome</h1>
      </PageHeader>
    </StyledHome>
  );
};

export default Home;
