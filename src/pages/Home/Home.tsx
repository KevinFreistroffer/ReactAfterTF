import * as React from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../../components/PageHeader';
import { StyledHome } from './Home.styled';

export interface IHomeProps {}

export const Home = (props: IHomeProps) => {
  const { t } = useTranslation();
  return (
    <StyledHome>
      <PageHeader>
        <h1>{t('welcome', 'Welcome')}</h1>
      </PageHeader>
    </StyledHome>
  );
};

export default Home;
