import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks"
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
  const [isReady, setIsReady] = useState(false)

  //retore token when app restarts  (in authStorage)
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user)

  }

  useEffect(() => {
    restoreUser();
  }, [])

  // if (!isReady)
  //   return (
  //     <AppLoading startAsync={restoreToken} onFinish={() => setIsReady(true)} />
  //   );
  // console.log(Dimensions.get("screen"));
  console.log(useDimensions(), useDeviceOrientation())
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
    paddingTop: 100,

  },
});
