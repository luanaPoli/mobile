import React, {useState} from 'react';
import { View } from 'react-native';
import Button from '../buttons/Button';
import { 
  getButtonFloatSize, 
  getButtonFloatType, 
  getIconStyle 
} from './utils'

function ButtonFloat({ 
  onPress = () => {}, 
  icon,  
  type = 'primary',
  size = 'medium', 
  options = [] 
}) {
  type = getButtonFloatType(type)
  size = getButtonFloatSize(size)

  const iconStyle = getIconStyle(type, size)

  const [showButtons, setShowButtons] = useState(false);
  const toggleButtons = () => {
    onPress()
    setShowButtons(!showButtons)
  };

  return (
    <View style={{ position: 'absolute', bottom: 20, right: 20 }}>
      <Button 
        onPress={toggleButtons} 
        type={type} 
        size={size} 
        icon={icon}
        style={{borderRadius: 28}}
        boxStyle={{borderRadius: 28}}
        iconStyle={iconStyle} 
      />
      {showButtons && (
        <View style={{ position: 'absolute', bottom: 70, right: 10 }}>
          {options.map(
            (
              {
                type = 'primary', 
                icon, 
                onPress = () => {},
              }, 
              index
            ) => (
              <Button 
                key={index}
                type={getButtonFloatType(type)}
                icon={icon}
                style={{borderRadius: 28}}
                boxStyle={{borderRadius: 28}}
                onPress={onPress}
                size='small'
              />
            ))}
        </View>
      )}
    </View>
  );
};

export default ButtonFloat;
