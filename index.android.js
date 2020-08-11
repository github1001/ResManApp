import {
   AppRegistry,
   View
} from 'react-native'
import React, { Component } from 'react';
import App from './app/index'
import MainApp from './screens/MainApp'
import * as firebase from 'firebase';



AppRegistry.registerComponent('Chat', () => MainApp)
