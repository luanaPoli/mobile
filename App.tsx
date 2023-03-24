import React from 'react';
import { View } from 'react-native';
import Button from './src/components/buttons/Button';
import Icon from './src/images/icons/Icon';

export default function App(){
  const signIn = () => {
    console.warn('clicado')
  }
  return (
    <View  style={{ 
      flex:1,
      paddingTop: 50,
      justifyContent:'center',
      alignItems:'center',
    }}>
        <Button 
          onPress={signIn}
          disabled
          type='primary'
          icon="person_more"
        >Botão Primário</Button>
        <Button type='primary' variant='fill' icon="person" size='large' >
          Botão Primário
        </Button>
        <Button type='primary' variant='outline'>
          Botão Primário
        </Button>
        <Button type='primary' variant='ghost'>
          Botão Primário
        </Button>
        <Button 
          onPress={signIn}
          disabled
          type='secondary'
        >Botão Secundário</Button>
        <Button type='secondary' variant='fill' icon="person">
          Botão Secundário
        </Button>
        <Button type='secondary' variant='outline'>
          Botão Secundário
        </Button>
        <Button type='secondary' variant='ghost'>
          Botão Secundário
        </Button>
        <Button 
          onPress={signIn}
          disabled
          type='danger'
        >Botão Destrutivo</Button>
        <Button type='danger' variant='fill' icon="person_more" size='small'>
          Botão Destrutivo
        </Button>
        <Button type='danger' variant='outline'>
          Botão Destrutivo
        </Button>
        <Button type='danger' variant='ghost'>
          Botão Destrutivo
        </Button>
    </View>
  );
};
