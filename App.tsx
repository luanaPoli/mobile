import React, { useState } from 'react';
import { View, Text , TouchableOpacity, StyleSheet} from 'react-native';
import Button from './src/components/buttons/Button';
import Separator from './src/components/separator/Separator';
import Backdrop from './src/components/backdrop/Backdrop';
import ButtonFloat from './src/components/buttonFloat/ButtonFloat';

export default function App(){
  const [backdropVisible, setBackdropVisible] = useState(false);

  const handleOpenBackdrop = () => {
    setBackdropVisible(true);
  }

  const handleCloseBackdrop = () => {
    setBackdropVisible(false);
  }

  const options = [
    { icon: 'person', type: 'primary', onPress: () => {console.warn('clicado')} },
    { icon: 'person_more', type: 'secondary', onPress: () => {console.warn('clicado')}},
  ];

  return (
    <View  style={{ 
      flex:1,
      paddingTop: 50,
      justifyContent:'center',
      alignItems:'center',
      flexDirection: 'row'
    }}>
      {/* <ButtonFloat  icon='person'/>  */}
      {/* <ButtonFloat icon='person_more' size='medium' type='danger' options={options}/> */}
  
      {/* <Text>texto</Text>
      <Separator width='80%'/> */}
      <Text>texto</Text>
      <Separator vertical/>
      <Text>texto</Text> 
      {/* <TouchableOpacity style={styles.button} onPress={handleOpenBackdrop}>
        <Text style={styles.buttonText}>Open Backdrop</Text>
      </TouchableOpacity>
      <Backdrop
        visible={backdropVisible}
        onClose={handleCloseBackdrop}
      /> */}

        {/* <Button 
          disabled
          type='primary'
          icon="person_more"
        >Botão Primário</Button>
        <Button 
          type='primary' 
          variant='fill' 
          icon="person" 
          size='large'
        >
          Botão Primário
        </Button>
        <View style={{flexDirection: 'row'}}>
          <Button 
            type='primary' 
            variant='outline'
            size='small'
            loading
          >
            Botão Primário
          </Button>
        </View>
        <Button type='primary' variant='outline'>
          Botão Primário
        </Button>
        <Button type='primary' variant='ghost'>
          Botão Primário
        </Button>
        <Button 
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
        </Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});