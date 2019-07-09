/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ViewBootstrap from './src/View'
const App = () => {
  return (
    <ViewBootstrap className={['row','align-items-center']}>
      <ViewBootstrap className={'col-3'} style={{backgroundColor: 'red', height: 50}}/>
      <ViewBootstrap className={'col-9'} style={{backgroundColor: 'blue', height: 50}}/>
      <ViewBootstrap className={'col-6'} style={{backgroundColor: 'black', height: 50}}/>
    </ViewBootstrap>
  );
};

export default App;
