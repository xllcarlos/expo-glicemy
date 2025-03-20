import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import Routes from './routes/Routes';
import { UserProvider } from './contexts/UserContext';
import { HealthProvider } from './contexts/HealthContext';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export default function App() {
  return (
    <UserProvider>
      <HealthProvider>
        <View style={styles.container}>
          <Routes />
        </View>
      </HealthProvider>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT
  }
});