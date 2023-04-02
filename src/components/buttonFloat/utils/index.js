import light from 'politokens/build/js/mob/light';

export function getButtonFloatType(type) {
  return {
    primary: 'primary',
    secondary: 'secondary'
  }[type] || 'primary'
}

export function getButtonFloatSize(size) {
  return size = {
    medium: 'medium',
    small: 'small'
  }[size] || 'medium'
}

export const getIconStyle = (type, size) => {
  const mappedStyle = {
    primary: {
      color: light.primary10,

    },
    secondary: {
      color: light.secondary900
    },
  }
  const mappedSize = {
    small: {
      margin: 8

    },
    medium: {
      margin: 16
    },
  }
  const iconStyleSize = mappedSize[size] || mappedSize.medium

  const iconStyle = mappedStyle[type] || mappedStyle.primary

  return {...iconStyleSize, ...iconStyle}
}