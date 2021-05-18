import React from 'react';
import '../../styles/reset.css';
import '../../styles/default.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Portfolio, SignIn, SignUp } from '../../pages';
import Header from '../Header/Header';
import Main from '../Main';
import ErrorBoundary from '../ErrorBoundary';
import { StyledFooter } from '../Footer/Footer.styled';
import Loading from '../Loading';
import { useSelector } from 'react-redux';
import { DefaultRootState } from '../../store/index';
import { NavigationLink } from '../Header/components/Navigation/Navigation.styled';

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  const store = useSelector((store: DefaultRootState) => store);

  return (
    <>
      {/* {store.loading.isLoading && <Loading />} */}
      <StyledFooter className='flex-column flex-center-all'>
        <NavigationLink  exact to='/'>Home</NavigationLink>
        <NavigationLink  exact to='/contact-me'>Contact me</NavigationLink>
        <NavigationLink  exact to='/portfolio'>Portfolio</NavigationLink>
      </StyledFooter>
    </>
  );
}
