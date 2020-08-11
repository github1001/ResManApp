import React, { Component } from 'react'

import { View, TextInput, TouchableOpacity, Text,StyleSheet,Alert } from 'react-native'
import * as firebase from 'firebase';
import { NavigationActions } from 'react-navigation';


class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', };

    this.handleEmailChange = (email) => {
      this.setState({email: email})
    }

    this.handlePasswordChange = (password) => {
      this.setState({password: password})
    }


  }
_signIn()
{


  // firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  // .then((user) => {
  //
  //
  //
  //   const resetAction = NavigationActions.reset({
  //         index: 0,
  //         actions: [NavigationActions.navigate({ routeName: 'Drawer' })],
  //       });
  //       this.props.navigation.dispatch(resetAction);
  // })
  // .catch((error) => {
  //    const { code, message } = error;
  //    Alert.alert("Sign Up",error.message)
  // });
  Alert.alert("Sign Up","Under Implementation");
}



  render() {
    return (
      <View
        style={styles.container}>

        <TextInput
          style={styles.textInput}
          placeholder={'email'}
          returnKeyType='next'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={this.handleEmailChange}
          value={this.state.email}
          underlineColorAndroid={'transparent'} />

        <TextInput
          style={styles.textInput}
          placeholder={'password'}
          secureTextEntry={true}
          returnKeyType='done'
          onChangeText={this.handlePasswordChange}
          value={this.state.password}
          underlineColorAndroid={'transparent'} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => this._signIn()}>

          <Text style={styles.buttonTitle}>SignUp</Text>

        </TouchableOpacity>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent:'center',
  },
  textInput: {
    backgroundColor: '#ffffff',
    height: 40,
    margin: 10,
    borderRadius: 5,
    padding: 3,
  },
  button: {
    backgroundColor: '#88cc88',
    height: 40,
    margin: 10,
    borderRadius: 5,
    padding: 3,
    alignItems: 'center',
    justifyContent:'center',
  },
  buttonTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  }

});

module.exports=SignUp;
