import {TouchableOpacity, View} from 'react-native';
import {Text} from '../Text/Text';

interface ButtonProps {
  title: string;
}

export const Button = ({title}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        paddingVertical: 14,
        backgroundColor: '#074C4E',
        alignItems: 'center',
        borderRadius: 16,
      }}>
      <Text preset="paragraphMedium" bold style={{color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
};
