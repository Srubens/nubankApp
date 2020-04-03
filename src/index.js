import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import Main from './pages/Main'
import styles from './styles'

const App = () => (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
      <Main></Main>
    </>
);

export default App;