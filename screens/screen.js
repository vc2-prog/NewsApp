import React, {Component} from 'react';
import {View, Text, TextInput, Button,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import * as firebase from 'firebase';
import { withNavigation } from 'react-navigation'
class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:'',
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
  
      firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }

    });
  }
 
  LogIn = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          Alert.alert({email});
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
              clearButtonMode="while-editing"
              textContentType="emailAddress"
              onChangeText={email => this.setState({ email })}>
                 
              </TextInput>
            </TouchableOpacity>
            <Text style ={styles.text}>Password</Text>
            <TouchableOpacity style ={styles.textInput}>
              <TextInput
              clearButtonMode="while-editing"
              textContentType="password"
              onChangeText={password => this.setState({ password })} >
              
              
              </TextInput>
            </TouchableOpacity>
        <TouchableOpacity
        style = {styles.button}
        onPress={() => this.LogIn(this.state.email, this.state.password)}>
          <Text style = {{fontSize:20,color:"#389CFF",textAlign:"center"}}>LogIn</Text>
        </TouchableOpacity>
        <TouchableOpacity

        onPress={(_id)=>this.props.navigation.navigate('signup')}
        ><Text style={{fontSize:20,color:"#389CFF",textAlign:"center"}}> New User?  </Text>
        <Text style={{fontSize:20,color:"#389CFF",textAlign:"center"}}> SignUp   </Text>
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

export default withNavigation(Screen);