import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" style={{color: 'red'}}>
        Coffstack
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
