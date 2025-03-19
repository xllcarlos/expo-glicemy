import React from 'react';
import { Platform, StatusBar, View } from 'react-native';

import Routes from './routes/Routes';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: STATUSBAR_HEIGHT }}>
      <Routes />
    </View>
  );
}