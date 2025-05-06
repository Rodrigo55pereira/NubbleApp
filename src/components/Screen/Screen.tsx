import React from 'react';
import {Box} from '../Box/Box';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ScreenProps {
  children?: React.ReactNode;
}

export const Screen = ({children}: ScreenProps) => {
  const {top} = useSafeAreaInsets();
  return <Box paddingHorizontal="s24" style={{ paddingTop: top }}>{children}</Box>;
};
