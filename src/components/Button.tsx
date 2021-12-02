import React, { ReactNode } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TouchableOpacityProps
} from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface ButtonProps extends TouchableOpacityProps {
  children: string
}

export const Button = ({ children, ...rest }: ButtonProps) =>
<TouchableOpacity
  style={styles.button}
  activeOpacity={0.7}
  {...rest}
>
  <Text style={styles.title}>
    {children}
  </Text>
</TouchableOpacity>

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 16
  },
  title: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  }
})