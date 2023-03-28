import light from 'politokens/build/js/mob/light';

export const getTextStyle = (style, type, variant, size, hasIcon) => {
  const mappedTypes = {
    primary: {
      fill: {color: light.primary10},
      outline: {color: light.primary600},
      ghost: {color: light.primary600}
    },
    secondary: {
      fill: {color: light.secondary900},
      outline: {color: light.secondary600},
      ghost: {color: light.secondary600}
    },
    danger: {
      fill: {color: light.feedbacksNegative10},
      outline: {color: light.feedbacksNegative600},
      ghost: {color: light.feedbacksNegative600}
    }
  }
  const mappedSize = {
    small: {
      paddingVertical: hasIcon ? 0 : 12,
      paddingRight: 8,
      paddingLeft: hasIcon ? 0 : 8, 
    },
    medium: {
      paddingVertical: hasIcon ? 0 :16,
      paddingRight: 12,
      paddingLeft: hasIcon ? 0 : 12
    },
    large: {
      paddingVertical: hasIcon ? 0 : 18,
      paddingRight: 16,
      paddingLeft: hasIcon ? 0 : 16
    }
  }
  const styleTextSize = mappedSize[size] || mappedSize.medium
  const textType = mappedTypes[type] || mappedTypes.primary
  const styleText = textType[variant] || textType.fill
  return [style.text, {...styleText, ...styleTextSize}]
}
export const getIconStyle = (type, variant, size) => {
  const mappedStyle = {
    primary: {
      fill: {color: light.primary10},
      outline: {color: light.primary600},
      ghost: {color: light.primary600},
    },
    secondary: {
      fill: {color: light.secondary900},
      outline: {color: light.secondary600},
      ghost: {color: light.secondary600},
    },
    danger: {
      fill: {color: light.feedbacksNegative10},
      outline: {color: light.feedbacksNegative600},
      ghost: {color: light.feedbacksNegative600},
    }
  }
  const iconSize = 5
  const mappedSize = {
    small: {
      margin: 2 + iconSize

    },
    medium: {
      margin: 6 + iconSize
    },
    large: {
      margin: 10 + iconSize
    }
  }
  const iconStyleSize = mappedSize[size] || mappedSize.medium

  const iconStyle = mappedStyle[type] || mappedStyle.primary
  const iconFullStyle = iconStyle[variant] || iconStyle.fill

  return {...iconStyleSize, ...iconFullStyle}
}

export const getButtonStyle = (style, type, variant) => {
  const mappedTypes = {
    primary: {
      fill: {backgroundColor: light.primary600, borderColor: light.primary600},
      outline: {backgroundColor: light.neutral50, borderColor: light.primary600},
      ghost: {backgroundColor: 'transparent', borderColor: 'transparent'},
    },
    secondary: {
      fill: {backgroundColor: light.secondary600, borderColor: light.secondary600},
      outline: {backgroundColor: light.neutral50, borderColor: light.secondary600},
      ghost: {backgroundColor: 'transparent', borderColor: 'transparent'},
    },
    danger: {
      fill: {backgroundColor: light.feedbacksNegative600, borderColor: light.feedbacksNegative600},
      outline: {backgroundColor: light.neutral50, borderColor: light.feedbacksNegative600},
      ghost: {backgroundColor: 'transparent', borderColor: 'transparent'},
    },
  }
  const buttonType = mappedTypes[type] || mappedTypes.primary
  const styleButton = buttonType[variant] || mappedTypes.fill
  return [style.button, styleButton]
}

export const getClickedButtonBoxStyle = (type) => {
  const mappedTypes = {
    primary: {borderColor: light.buttonShadowFocus},
    secondary: {borderColor: light.focusSecondary},
    danger: {borderColor: light.focusFeedbackNegative}
  }
  return mappedTypes[type] || mappedTypes.primary
} 