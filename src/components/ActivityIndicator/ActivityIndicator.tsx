import { useTheme } from '@shopify/restyle'
import {
    ActivityIndicatorProps,
    ActivityIndicator as RNActivityIndicator,
} from 'react-native'
import { Theme, ThemeColors } from '../../theme/theme'
import { useAppTheme } from '../../hooks/useAppTheme'

interface AIProps extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export const ActivityIndicator = ({color, ...activityIndicatorProps}: AIProps) => {
  const {colors} = useAppTheme();
  return <RNActivityIndicator color={colors[color]} {...activityIndicatorProps} />;
};
