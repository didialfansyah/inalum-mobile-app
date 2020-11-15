import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { bgInalum, bgInalum2 } from '../../assets';
import { Heading } from '../../components';

const Main = () => {
    return (
        <View style={style.container}>
            <Heading />
            <View style={style.content}>
                <Image source={bgInalum2} style={style.strech} resizeMode='cover'/>
            </View>
            <View style={style.content}>
                <Text style={style.heading}>Selamat datang di APP Mobile INALUM</Text>
                <Text style={style.textContent}>
                    PT Indonesia Asahan Aluminium, colloquially known as Inalum 
                    is an Indonesian state-owned company specialized in aluminium 
                    smelting. The company manage the huge potential of electricity 
                    generated from Asahan River.
                </Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      justifyContent: 'space-between'
    },
  
    content: {
      width: '100%',
      padding: 30,
    },
  
    strech : {
      width: '100%',
      height: 300
    },
  
    heading :{
      fontSize: 24,
      fontFamily: 'Roboto-Bold',
      textAlign: 'center',
      marginBottom: 20,
      color: '#27ae60'
    },
  
    textContent: {
      fontSize: 17,
      fontFamily: 'Roboto-Regular',
      textAlign: 'justify',
      marginBottom: 20,
    }
});

export default Main;