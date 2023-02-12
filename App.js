import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

const App = () => {
  const [name, setName] = useState('Anil');
  const [email, setEmail] = useState('email');
  const [password, setPassword] = useState('password');
  const [display, setDisplay] = useState();
  const resetFormData = () => {
    setDisplay(false);
    setEmail("");
    setPassword("");
    setName("");
  }
  return <View>
        <Text style={{fontSize : 30 }}>Simple Form in React Native </Text>
        <TextInput placeholder="Enter your name "  style={styles.textInput} onChangeText= { (text) => {
               setName(text)
        }}  value={name} />
        <TextInput placeholder="Enter your password  "  style={styles.textInput} onChangeText= { (text) => {
         setPassword(text)}} secureTextEntry={true} value={password}  />

         <TextInput placeholder="Enter user email "  style={styles.textInput} onChangeText= { (text) => {
          setEmail(text)}} value={email} />
          <View style={{ marginBottom : 10}} >
          <Button title="Print Value"  style={{ margin: 10 }} onPress={ () => { setDisplay(true) }}/>
          {
            display ? <View>       
              <Text style={{ fontSize : 15}} >User Name is : {name} </Text>
              <Text style={{ fontSize : 15}} >User Email is : {email} </Text>
              <Text style={{ fontSize : 15}} >User Password is : {password} </Text>
              </View> : null
          }
          </View>
          <Button title="Clear Details" color = {"green"} onPress= { () => { 
            resetFormData()
          }} />
  </View>;
};

const styles = StyleSheet.create({
  textBox: {
    color: 'blue',
    fontSize: 25,
    backgroundColor: 'pink',
    marginBottom: 10,
    padding: 4,
    borderRadius: 10,
    height: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderColor: 'red',
    borderWidth: 2,
  },
  textInput: {
    fontSize: 10,
    color: 'red',
    borderWidth: 2,
    borderColor: 'red',
    margin: 10,
  },
});

export default App;
