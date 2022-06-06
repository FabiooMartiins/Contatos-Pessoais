import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App(){
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('./assets/foto.jpeg')}
          style={styles.image}
        />
      </View>
      <View style={styles.contant}>
        <Text style={styles.title}>Fabio Martins</Text>
        <TouchableOpacity style={styles.contact} 
        onPress={()=>{Linking.openURL('https://wa.me/+5579998178059?text=Ol%C3%A1,%20Fabio%20Martins,%20tudo%20bem?!'); }}>
          <Icon name={'logo-whatsapp'} color={'#FFF'} size={30}/>
          <Text style={styles.description}>WhatsApp</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contact} 
        onPress={()=>{Linking.openURL('https://www.instagram.com/fabioomartiins/'); }}>
          <Icon name={'logo-instagram'} color={'#FFF'} size={30}/>
          <Text style={styles.description}>Instagram</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contact}
        onPress={()=>{Linking.openURL('https://github.com/FabiooMartiins'); }}>
          <Icon name={'logo-github'} color={'#FFF'} size={30}/>
          <Text style={styles.description}>Git Hub</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contact}
        onPress={()=>{Linking.openURL('https://www.linkedin.com/in/fabio-martins-95021b22b/'); }}>
          <Icon name={'logo-linkedin'} color={'#FFF'} size={30}/>
          <Text style={styles.description}>LinkedIn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#1E1F1F',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header:{
    marginTop: '100px',
    marginBottom: 50,
    marginTop: 30
  },
  contant:{
    backgroundColor: '#E24900',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingLeft: '25px',
    paddingRight: '25px',
    marginBottom: '30px',
    paddingBottom: 20,
  },
  title:{
    color: '#FFF', 
    fontSize: 35,
    fontFamily: 'sans-serif',
    fontWeight: 'bold', 
    marginTop: '15px'
  },
  image:{
    width: '30vh',
    height: '30vh',
    flex: 1,
    borderRadius: '100%'
  },
  contact:{
    width: '220px',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#423626',
    marginTop: 10,
    borderRadius: 10,
    padding: 7
  },
  description:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold', 
    marginLeft: 10,
  },

})