import React, { Component } from 'react';
import { View, Button, Alert, TouchableOpacity, Text,StyleSheet } from 'react-native';
import {Header} from 'react-native-elements'

export default class App extends Component {
  

  render() {
    return (
      <View style={{backgroundColor:'orange',justifyContent:'center', 
     paddingBottom:100, paddingTop:20}}>
      <Header backgroundColor = {'cyan'}
      centerComponent = {{text : 'Student Attendance',style: {color:'black',fontSize:20}}}/>
        <View>
        <Text style={{marginLeft:10, marginTop:40}}> Akash </Text>
          <TouchableOpacity
            style={styles.button}>
            <Text> Present </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}>
            <Text> Absent </Text>
          </TouchableOpacity>
        </View>
         <View>
          <Text style={{marginLeft:10, marginTop:40}}> Anil </Text>
          <TouchableOpacity
            style={styles.button}>
            <Text> Present </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}>
            <Text> Absent </Text>
          </TouchableOpacity>
          <Text style={{marginLeft:10, marginTop:40}}> Ajay </Text>
          <TouchableOpacity
            style={styles.button}>
            <Text> Present </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}>
            <Text> Absent </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
button :{
              width: 100,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              backgroundColor: 'lime',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:10,
              marginLeft :100
            
},
button2 :{
              width: 100,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              backgroundColor: 'red',
              borderWidth: 2,
              borderColor: 'white',
              marginLeft :200,
              marginTop:-50
            
}
})
