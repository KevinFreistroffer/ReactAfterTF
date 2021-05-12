import React from 'react';
import { IAppContext } from '../interfaces/AppContext';

export const appContextDefaultValue = {
  drawerIsOpen: false,
  toggleDrawer: () => {},
};

export const AppContext = React.createContext<IAppContext>(
  appContextDefaultValue
);
