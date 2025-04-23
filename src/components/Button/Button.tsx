import {ActivityIndicator} from 'react-native';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {Text} from '../Text/Text';
import {buttonPresets} from './buttonPresets';

// UI
// preset: primary e outline
// default, disabled

export type ButtonPreset = 'primary' | 'outline' | 'secundary';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
}

export const Button = ({
  title,
  loading,
  preset='primary',
  ...touchableOpacityBoxProps
}: ButtonProps) => {

  const buttonPreset = buttonPresets[preset];

  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
};
