import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button} from './src/components/Button/Button';
import {Text} from './src/components/Text/Text';
import {theme} from './src/theme/theme';
import { EyeOffIcon } from './src/assets/icons/EyeOffIcon'

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>
          <Button marginBottom="s24" title="Primary" disabled />
          <Button marginBottom="s24" title="Primary" />
          <Button preset="outline" title="Outline" marginBottom="s24" />
          <Button loading title="Loading" marginBottom="s24" />
          <Button
            disabled
            title="Outline"
            preset="outline"
            marginBottom="s24"
          />
          <EyeOffIcon />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
