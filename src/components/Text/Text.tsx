import { createText } from '@shopify/restyle'
import React from 'react'
import {
  Platform,
  TextStyle
} from 'react-native'
import { Theme } from '../../theme/theme'

const SRText = createText<Theme>();
type SRTextProps = React.ComponentProps<typeof SRText>;

interface TextProps extends SRTextProps {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}

export const Text = ({
  children,
  preset = 'paragraphMedium',
  bold,
  italic,
  semiBold,
  style,
  ...sRTextProps
}: TextProps) => {
  const fontFamily = getFontFamily(preset, bold, italic, semiBold);

  // ✅ Adiciona `fontStyle: 'italic'` SOMENTE no iOS
  // Isso é necessário pois mesmo usando a fonte itálica, o iOS às vezes não aplica o visual correto sem esse estilo extra
  const conditionalItalic =
    italic && Platform.OS === 'ios'
      ? {fontStyle: 'italic' as TextStyle['fontStyle']}
      : {};

  return (
    <SRText
      color="backgroundContranst"
      style={[
        $fontSizes[preset],
        {fontFamily}, // ✅ Continua usando a fonte correta
        conditionalItalic, // ✅ Estilo condicional só no iOS
        style,
      ]}
      {...sRTextProps}>
      {children}
    </SRText>
  );
};

// 🎯 Seleciona a família de fonte apropriada com base nos modificadores
const getFontFamily = (
  preset: TextVariants,
  bold?: boolean,
  italic?: boolean,
  semiBold?: boolean,
) => {
  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    if (bold && italic) return $fontFamily.boldItalic;
    return italic ? $fontFamily.boldItalic : $fontFamily.bold;
  }

  if (bold && italic) return $fontFamily.boldItalic;
  if (semiBold && italic) return $fontFamily.mediumItalic;
  if (bold) return $fontFamily.bold;
  if (semiBold) return $fontFamily.medium;
  if (italic) return $fontFamily.italic;
  return $fontFamily.regular;
};

// 🧱 Tamanhos de texto baseados no tipo
const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},
  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},
  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

// ✅ Certifique-se de que os nomes abaixo correspondem aos nomes internos (PostScript Name) das fontes
const $fontFamily = {
  black: 'Satoshi-Black',
  blackItalic: 'Satoshi-BlackItalic',
  bold: 'Satoshi-Bold',
  boldItalic: 'Satoshi-BoldItalic',
  italic: 'Satoshi-Italic',
  light: 'Satoshi-Light',
  lightItalic: 'Satoshi-LightItalic',
  medium: 'Satoshi-Medium',
  mediumItalic: 'Satoshi-MediumItalic',
  regular: 'Satoshi-Regular',
};

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';
