import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import Navigation from './srcm/navigation';

const App = () => {
  
  return (
    <>
    <StatusBar barStyle = {'light-content'} />
        
    <SafeAreaView style={{flex: 1 , backgroundColor: 'black'}} >
      <Navigation />
    </SafeAreaView>

    </>
    
  );
};

export default App;
