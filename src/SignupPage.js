import React, {useState} from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from "react-native";

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return ( 
    <View style = {styles.container}>
        <Image source ={require('../assets/makan.png')} style ={[styles.logoPic]} />
        
        <View style={styles.inputView}> 
          <TextInput 
          style={styles.TextInput}
          placeholder= 'Enter Email Here'
          placeholderTextColor= '#003f5c'
          onChangeText={(email) => setEmail(email)}/>
        </View>
  
        <View style={styles.inputView}>
        <TextInput 
          style={styles.TextInput}
          placeholder= 'Set Your Password'
          placeholderTextColor= '#003f5c'
          onChangeText={(password) => setEmail(setPassword)}
          secureTextEntry = {true}/>
        </View>

        <TouchableOpacity style={styles.signInBtn}>
          <Text style={styles.TextInput}>Create Account</Text>
        </TouchableOpacity>   

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Go Back</Text>
        </TouchableOpacity>

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF5858',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    logoPic: {
      height : 200,
      width: 200,
      resizeMode : 'stretch',
      marginBottom : 50
    },
  
    inputView: {
      backgroundColor : '#FFC0CB',
      borderRadius : 30,
      width: '70%',
      height: 45,
      marginBottom: 20,
      alignItems: 'flex-start'
    },
  
    TextInput: {
      height: 100,
      flex: 1,
      padding: 10
    },
  
    forgot_button: {
      height: 30,
      marginBottom: 10,
      color : 'white',
      fontSize : 11
    },
  
    signInBtn: {
      width: '80%',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      marginBottom: 20, 
      backgroundColor: 'salmon',
    },
  });

  export default SignupPage;