
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

function fruit () 
{
  return "apple";
}
const App = () => {
  const name = "Amit Chaman";
  const fruit = (val) => {
    console.warn(val)
  }
  return (
          <View>
            <Text style={{ fontSize : 50}}> {fruit()} </Text>
            <UserData />
             <Button title="On Press" onPress= {fruit} color={'green'} />
             <Button title="On Press" onPress= { () => { fruit("Hello") }} color={'green'} />

        </View>
  );
};

const UserData = () => {
  return(
    <View>
       <Text style={{ fontSize : 20}} >Name : Anil </Text>
       <Text style={{ fontSize : 20}} >Age : 29 </Text>
       <Text style={{ fontSize : 20}} >Email : anil@test.com </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
