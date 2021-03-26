import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function CreateAccount ({ navigation}){
  const [state, setState] = useState({email: "", Nickname: " ", firstName: "", LastName: "",password: ""})

  return (
    <View style={styles.container}>
      <View style = {styles.logo}>Let's create your Account</View>
      <View style = {styles.inputView}>
        <TextInput
        style = {styles.inputText}
        placeholder = "Email"
        placeholderTextColor = "#003F5c"
        onChangeText = {(state) => setState({email:state})}/>
      </View>
      <View style = {styles.inputView}>
        <TextInput
        style = {styles.inputText}
        placeholder = "NickName"
        placeholderTextColor = "#003F5c"
        onChangeText = {(state) => setState({Nickname:state})}/>
      </View>
      <View style = {styles.inputView}>
        <TextInput
        style = {styles.inputText}
        placeholder = "First Name"
        placeholderTextColor = "#003F5c"
        onChangeText = {(state) => setState({firstName:state})}/>
      </View>
      <View style = {styles.inputView}>
        <TextInput
        style = {styles.inputText}
        placeholder = "Last Name"
        placeholderTextColor = "#003F5c"
        onChangeText = {(state) => setState({LastName:state})}/>
      </View>
      <View style = {styles.inputView}>
      <TextInput
        style = {styles.inputText}
        placeholder = "Password..."
        placeholderTextColor = "#003F5c"
        onChangeText = {(state) => setState({password:state})}/>
      </View>
      <TouchableOpacity style={styles.loginBtn}
      onPress = { ( ) => navigation.push("Home")}>
          <Text style={styles.loginText}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => navigation.push("LogIn")}>
          <Text style={styles.loginText}>You have an account?</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});