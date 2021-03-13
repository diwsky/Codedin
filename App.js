/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';

import Router from './Router/index';
import Splash from './Pages/Splash';

const App: () => React$Node = () => {
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
