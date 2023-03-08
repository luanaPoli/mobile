import light from 'politokens/build/js/mob/light'

export const getTextStyle = (style, type, variant) => {
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
  const textType = mappedTypes[type] || mappedTypes.primary
  const styleText = textType[variant] || textType.fill
  return [style.text, styleText]
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
    primary: {borderColor: light.focusPrimary.color},
    secondary: {borderColor: light.focusSecondary.color},
    danger: {borderColor: light.focusFeedbackNegative.color}
  }
  return mappedTypes[type] || mappedTypes.primary
} 