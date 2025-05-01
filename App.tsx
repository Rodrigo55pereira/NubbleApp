import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';
import {Text} from './src/components/Text/Text';
import {TextInput} from './src/components/TextInput/TextInput';
import {theme} from './src/theme/theme';
import {Icon} from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text mb="s8" preset="headingLarge">
            Olá!
          </Text>
          <Text mb="s40" preset="paragraphLarge">
            Digite seu e-mail e senha para entrar
          </Text>
          <TextInput
            errorMessage="mesagem de error"
            label="Email"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's20'}}
          />
          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            RightComponent={<Icon color="gray2" name="eyeOn" />}
            boxProps={{mb: 's10'}}
          />
          <Text color="primary" preset="paragraphSmall" bold>
            Esqueci minha senha
          </Text>
          <Button mt="s48" title="Entrar" />
          <Button mt="s12" preset="outline" title="Criar uma conta" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
