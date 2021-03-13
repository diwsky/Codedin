/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {firebase} from './src/firebase/config';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Router from './Router/index';
import Splash from './Pages/Splash';

const App: () => React$Node = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <SafeAreaView style={{flex: 1}}>
        <Router />
      </SafeAreaView>
    </>
  );
};

export default App;
