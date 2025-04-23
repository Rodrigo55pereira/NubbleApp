import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  createBox,
  createRestyleComponent,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle'
import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Theme } from '../../theme/theme'

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  TouchableOpacityProps &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme>;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);
