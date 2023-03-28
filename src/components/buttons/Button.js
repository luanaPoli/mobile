import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { 
  getButtonStyle, 
  getTextStyle, 
  getClickedButtonBoxStyle, 
  getIconStyle 
} from './utils';
import light from 'politokens/build/js/mob/light';
import Icon from '../../images/icons/Icon';

const Button = ({
  onPress = () => {}, 
  children, 
  disabled = false, 
  variant = 'fill', 
  type = 'primary',
  size = 'medium',
  icon = '',
  loading = false 
}) => {
  const [click, setClick] = React.useState(false)
  const [buttonWidth, setButtonWidth] = React.useState(0)
  const [loadingRotate, setLoadingRotate] = React.useState(0)

  const iconStyle = getIconStyle(type, variant, size)
  const touchableStyle = getButtonStyle(style, type, variant)
  const textStyle = getTextStyle(style, type, variant, size, icon !== '')
  const buttonBoxStyle = [style.buttonBox, click && getClickedButtonBoxStyle(type)]

  React.useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoadingRotate(loadingRotate < 359 ? loadingRotate + 1 : 0)
      }, .01)
    }
  }, [loadingRotate])

  return (
    <View
      onLayout={event => setButtonWidth(event.nativeEvent.layout.width)}
      style={buttonBoxStyle}
    >
      {disabled && <View style={[style.shadow, {width: buttonWidth }]}/>}
      <TouchableOpacity
          style={touchableStyle}
          onPressIn={() => {
            if (!loading) {
              setClick(true)
            }
          }}
          onPressOut={() => setClick(false)}
          activeOpacity={1}
          onPress={() => {
            if (!loading) {
              onPress();
            }
          }}
          disabled={disabled}
          loading={loading}
        >
        { 
          loading ? (
            <Icon
              style={{ 
                transform: [{ rotate: `${loadingRotate}deg` }], 
                color: iconStyle.color, 
                margin: iconStyle.margin 
              }}   
              icon='spin'
              size={24}
            />
          ) : (
            <>
              <Icon icon={icon} size={24} style={iconStyle} />
              <Text style={textStyle}>
                {children}
              </Text>
            </>
          )
        }
        
      </TouchableOpacity>
    </View>
  );
};

export default Button

const buttonBoxStyle = {
  borderWidth: light.buttonBorderLarge,
  borderStyle: 'solid', 
  borderRadius: light.buttonRadius,
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
    backgroundColor: light.neutral10,
    opacity: .5,
    borderRadius: light.buttonRadius,
  },
  button: {
    borderRadius: light.buttonRadius,
    borderWidth: 1,
    borderStyle: 'solid', 
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: light.buttonLabelFontFamily,
    fontStyle: 'normal',
    fontWeight: light.buttonLabelFontWeight,
  },
})
