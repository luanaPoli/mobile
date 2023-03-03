import React from 'react';
import { View } from 'react-native';
import ButtonNormal from './src/components/buttons/ButtonNormal';


export default function App(){
  const signIn = () => {
    console.warn('clicado')
  }

  return (
    <View  style={{ 
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      }}>
        <ButtonNormal title="Ente" onpress={signIn}/>
        <ButtonNormal title="Entrar" onpress={signIn}/>
        <ButtonNormal title="Entrar" onpress={signIn}/>
        <ButtonNormal title="Entrar" onpress={signIn}/>
        <ButtonNormal title="Entrar" onpress={signIn}/>
        <ButtonNormal title="Entrar" onpress={signIn}/>
    </View>
  );
};
