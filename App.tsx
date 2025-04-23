import { ThemeProvider } from '@shopify/restyle'
import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native'
import { Button } from './src/components/Button/Button'
import { Text } from './src/components/Text/Text'
import { theme } from './src/theme/theme'

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>
          <Button
            marginBottom="s24"
            title="Entrar"
          />
          <Button preset="outline" title="Outline" marginBottom="s24"/>
          <Button preset="secundary" title="Secondary" marginBottom="s24"/>
          <Button loading title="Loading" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
