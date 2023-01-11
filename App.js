/* Entry Point to the App Deals Nvigation to Login and Logout State */
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";


import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import authStorage from './app/auth/storage';
import { navigationRef } from './app/navigation/rootNavigation';
import logger from './app/utility/logger';

logger.start()


export default function App() {
  const [user, setUser] = useState();

  //retore token when app restarts  (in authStorage)
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user)

  }

  useEffect(() => {
    restoreUser();
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );

}

