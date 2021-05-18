import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Portfolio, SignIn, SignUp, ContactMe } from '../../pages';
import Header from '../Header/Header';
import Main from '../Main';
import Footer from '../Footer';
import ErrorBoundary from '../ErrorBoundary';
import { Container } from '../App/App.styled';
import Loading from '../Loading';
import { useSelector } from 'react-redux';
import { DefaultRootState } from '../../store/index';
import { NavigationLink } from '../Header/components/Navigation/Navigation.styled';
import LanguageSelect from '../Header/components/LanguageSelect';
import { ClickAwayListener } from '@material-ui/core';
import { appContextDefaultValue, AppContext } from '../../context';

import {
  // Icon,
  Drawer,
  UL,
  LI,
  Label,
} from '../Header/components/MenuToggler/MenuToggler.styled';
import { useTranslation } from 'react-i18next';

export interface IAppProps {}

export default function App(props: IAppProps) {
  const { t } = useTranslation();
  const store = useSelector((store: DefaultRootState) => store);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    // TODO typeof event?
    window.onresize = (event: any) => {
      if (window.innerWidth >= 768) {
        if (isOpen) {
          setIsOpen(false);
        }
      }
    };
  }, [isOpen]);

  const toggleDrawer = (_isOpen?: boolean) => {
    setIsOpen(!isOpen);
  };

  return (
    <AppContext.Provider
      value={{
        ...appContextDefaultValue,
        toggleDrawer,
      }}
    >
      <>
        {store.loading.isLoading && <Loading />}

        <Container>
          <Router>
            <ErrorBoundary>
              <Drawer
                anchor='right'
                open={isOpen}
                ModalProps={{
                  onBackdropClick: () => {
                    toggleDrawer();
                  },
                }}
              >
                <Label htmlFor='language-select'>
                  {t('Select language', 'Select language')}
                </Label>
                <LanguageSelect className='mb-l1' />
                <UL>
                  <LI>
                    <NavigationLink
                      exact
                      to='/'
                      onClick={(event: any) => toggleDrawer()}
                    >
                      {t('page_title.Home', 'Home')}
                    </NavigationLink>
                  </LI>
                  <LI>
                    <NavigationLink
                      to='/portfolio'
                      onClick={(event: any) => toggleDrawer()}
                    >
                      {t('page_title.Portfolio', 'Portfolio')}
                    </NavigationLink>
                  </LI>
                  <LI>
                    <NavigationLink
                      to='/contact-me'
                      onClick={(event: any) => toggleDrawer()}
                    >
                      {t('page_title.Contact me', 'Contact me')}
                    </NavigationLink>
                  </LI>
                </UL>
              </Drawer>

              <Header />
              <Main>
                <Switch>
                  <Route path='/portfolio'>
                    <Portfolio />
                  </Route>{' '}
                  <Route path='/contact-me'>
                    <ContactMe />
                  </Route>
                  <Route path='/sign-in'>
                    <SignIn />
                  </Route>
                  <Route path='/sign-up'>
                    <SignUp />
                  </Route>
                  <Route path='/'>
                    <Home />
                  </Route>
                </Switch>
              </Main>
              <Footer />
            </ErrorBoundary>
          </Router>
        </Container>
      </>
    </AppContext.Provider>
  );
}
