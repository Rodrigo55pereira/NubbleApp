import { useTheme } from '@shopify/restyle'
import {
    ActivityIndicatorProps,
    ActivityIndicator as RNActivityIndicator,
} from 'react-native'
import { Theme, ThemeColors } from '../../theme/theme'

interface AIProps extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export const ActivityIndicator = ({color, ...activityIndicatorProps}: AIProps) => {
  const {colors} = useTheme<Theme>();
  return <RNActivityIndicator color={colors[color]} {...activityIndicatorProps} />;
};
