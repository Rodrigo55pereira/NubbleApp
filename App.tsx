import { ThemeProvider } from '@shopify/restyle'
import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Box } from './src/components/Box/Box'
import { Button } from './src/components/Button/Button'
import { Icon } from './src/components/Icon/Icon'
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
          <Box flexDirection="row">
            <Icon name="chevronRight" size={50} />
            <Icon name="heartFill" color="buttonPrimary" />
            <Icon name="profile" size={50} />
            <Icon name="profileFill" size={50} />
            <Icon name="heart" size={50} />
            <Icon name="bellOn" color="carrotSecondary" size={50} />
          </Box>
          <Box flexDirection="row">
            <Icon name="newPost" size={50} />
            <Icon name="camera" size={50} />
            <Icon name="chat" size={50} />
            <Icon name="chatOn" color="error" size={50} />
            <Icon name="flashOff" size={50} />
            <Icon name="flashOn" size={50} />
          </Box>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
