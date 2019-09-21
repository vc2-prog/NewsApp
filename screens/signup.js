import React, {Component} from 'react';
import {View, Text, TextInput, Button,StyleSheet,TouchableOpacity} from 'react-native';
import * as firebase from  'firebase';
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loggedIn: null,
    };
  }
  componentDidMount() {
    let config = {
      apiKey: 'AIzaSyA1fF7WCGMSuM2JOPsHl6IwAgUzrQTj2GA',
      authDomain: 'test-f2d03.firebaseapp.com',
      databaseURL: 'https://test-f2d03.firebaseio.com',
      projectId: 'test-f2d03',
      storageBucket: '',
      messagingSenderId: '562838113176',
      appId: '1:562838113176:web:13839d63055aa69700b9ed',
    };
    // Initialize Firebase
    if(!firebase.app.length){
    firebase.initializeApp(config);
    }
    else{
        firebase.app();
    }

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }
  SignUp = (email, password) => {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user);
        });
    } catch (error) {
      console.log(error.toString(error));
    }
  };
  renderComponent() {
    if (this.state.loggedIn) {
      return (
        <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
      );
    } else {
      return (
        <View>
          <View>
          <Text style ={styles.text}>
            Email Address
          </Text>
            <TouchableOpacity style ={styles.textInput}>
              <TextInput
              onChangeText={email => this.setState({ email })}>
                 
              </TextInput>
            </TouchableOpacity>
            <Text style ={styles.text}>Password</Text>
            <TouchableOpacity style ={styles.textInput}>
              <TextInput
              onChangeText={password => this.setState({ password })} >
                           
              </TextInput>
            </TouchableOpacity>
        <TouchableOpacity
        onPress={() => this.SignUp(this.state.email, this.state.password)}
        ><Text style={{fontSize:20,color:"#389CFF",textAlign:"center"}}> Signup  </Text>
        </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
  render() {
    return <View>{this.renderComponent()}</View>
  }
}

const styles =StyleSheet.create({
  textInput:{
    paddingStart:10,
    marginStart:20,
    paddingTop:10,
    borderRadius:40,
    width:360,
    borderWidth:1,
    borderColor:"black",
    marginEnd:40,

  },
  text:{
    marginStart:50,
    fontSize:16,
    marginTop:40,

  },
  button:{
    marginStart:80,
    borderRadius:40,
    height:50,
    width:'60%',
    fontSize:20,
    textAlign:'center',
    marginTop:40,
  }
})

