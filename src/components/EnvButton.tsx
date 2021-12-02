import React from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView
} from 'react-native'
import {
  RectButton,
  RectButtonProps
} from 'react-native-gesture-handler'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface envButtonProps extends RectButtonProps {
  title: string
  active: string
}

export const EnvButton = ({
  title,
  active,
  ...rest
}: envButtonProps) => {

  return (
    <RectButton
      style={[
        styles.btn,
        title === active && styles.btnActive
      ]}
      {...rest}
    >
      <Text style={[
        styles.title,
        styles.titleActive
      ]}>
        {title}
      </Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.shape,
    height: 40,
    width: 76,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5
  },
  btnActive: {
    backgroundColor: colors.green_light
  },
  title: {
    fontFamily: fonts.text,
    color: colors.heading
  },
  titleActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
})