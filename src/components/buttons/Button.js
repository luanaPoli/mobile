import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { getButtonStyle, getTextStyle, getClickedButtonBoxStyle } from './utils';
import light from 'politokens/build/js/mob/light'

const Button = ({
  onPress = () => {}, 
  children, 
  disabled = false, 
  variant = 'fill', 
  type = 'primary'
}) => {
  const [click, setClick] = React.useState(false)
  const [buttonWidth, setButtonWidth] = React.useState(0)
  const touchableStyle = getButtonStyle(style, type, variant)
  const textStyle = getTextStyle(style, type, variant)
  const buttonBoxStyle = [style.buttonBox, click && getClickedButtonBoxStyle(type)]

  return (
    <View 
      onLayout={event => setButtonWidth(event.nativeEvent.layout.width)}
      style={buttonBoxStyle}
    >
      {disabled && <View style={[style.shadow, {width: buttonWidth - 3}]}/>}
      <TouchableOpacity
          style={touchableStyle}
          onPressIn={() => setClick(true)}
          onPressOut={() => setClick(false)}
          activeOpacity={1}
          disabled={disabled}
          onPress={onPress}
      >
        <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button

const buttonBoxStyle = {
  borderWidth: 2,
  borderStyle: 'solid', 
  borderRadius: 5,
  position: 'relative',
}

const style = StyleSheet.create({
  buttonBox: {
    ...buttonBoxStyle,
    borderColor:'transparent',
  },
  clickedButtonBox: {
    ...buttonBoxStyle,
  },
  shadow: {
    position: 'absolute',
    height: '100%',
    zIndex: 2,
    backgroundColor: '#fff',
    opacity: .5,
    borderRadius: light.buttonRadius,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: light.buttonRadius,
    borderWidth: 1,
    borderStyle: 'solid', 
  },
  text: {
    fontFamily: light.buttonLabelFontFamily,
    fontStyle: 'normal',
    fontWeight: light.buttonLabelFontWeight.toLowerCase(),
    fontSize: light.buttonLabelFontSize,
  },
})
