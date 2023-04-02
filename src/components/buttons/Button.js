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
  loading = false,
  style,
  iconStyle = {},
  boxStyle = {}
}) => {
  const [click, setClick] = React.useState(false)
  const [buttonWidth, setButtonWidth] = React.useState(0)
  const [loadingRotate, setLoadingRotate] = React.useState(0)

  const iconStyles = getIconStyle(type, variant, size)
  const touchableStyle = getButtonStyle(styles, type, variant)
  const textStyle = getTextStyle(
    styles, 
    type, 
    variant, 
    size, 
    icon !== '', 
    children !== undefined
  )
  const buttonBoxStyle = [styles.buttonBox, click && getClickedButtonBoxStyle(type)]

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
      style={[...buttonBoxStyle, boxStyle]}
    >
      {disabled && <View style={[styles.shadow, {width: buttonWidth }]}/>}
      <TouchableOpacity
          style={[...touchableStyle, style]}
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
                color: iconStyles.color, 
                margin: iconStyles.margin
              }}   
              icon='spin'
              size={24}
            />
          ) : (
            <>
              <Icon 
                icon={icon} 
                size={24} 
                style={{...iconStyles, ...iconStyle}} 
              />
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

const styles = StyleSheet.create({
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
