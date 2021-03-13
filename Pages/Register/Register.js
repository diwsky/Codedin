import React, {useState} from 'react';
import {
  Text,
  Image,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {styles} from './Style';
import MainText from '../../Component/MainText';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Register = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const getUser = async () => {
    console.log('Get User!');
    const userDoc = await firestore()
      .collection('users')
      .get()
      .then((querySnapShot) => {
        console.log(`Total users: ${querySnapShot.size}`);
        querySnapShot.forEach((docSnapShot) => {
          console.log(
            `user id: ${docSnapShot.id} and data: `,
            docSnapShot.data(),
          );
        });
      });
  };

  const onRegisterPress = () => {
    if (email == '' || password == '') {
      Alert.alert('Error', `Please insert email and/or password!`);
    } else if (confirmPassword !== password) {
      Alert.alert('Error', `Password didn't match!`);
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          Alert.alert(
            'Success',
            'Account created! Login',
            [
              {
                text: 'OK',
                onPress: () =>
                  navigation.navigate('Login', {
                    username,
                    password,
                  }),
              },
            ],
            {
              cancelable: false,
            },
          );
        })
        .catch((err) => {
          Alert.alert('Error', err.message);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/drawable/LOGO.png')}></Image>
      <View style={styles.mainColumn}>
        <View style={{alignItems: 'center'}}>
          <MainText>
            <Text style={styles.loginText}>Register</Text>
          </MainText>
        </View>

        <View style={styles.boxLogin}>
          <View>
            <MainText>
              <Text style={styles.emailText}>Username</Text>
            </MainText>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={(value) => setUsername(value)}></TextInput>
          </View>
          <View>
            <MainText>
              <Text style={styles.emailText}>E-mail</Text>
            </MainText>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(value) => setEmail(value)}></TextInput>
          </View>

          <View>
            <MainText>
              <Text style={styles.emailText}>Password</Text>
            </MainText>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={(value) => setPassword(value)}></TextInput>
          </View>
          <View>
            <MainText>
              <Text style={styles.emailText}>Confirm Password</Text>
            </MainText>
            <TextInput
              style={styles.input}
              value={confirmPassword}
              secureTextEntry
              onChangeText={(value) => setConfirmPassword(value)}></TextInput>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={styles.buttonSignin}
            onPress={() => onRegisterPress()}>
            <MainText>
              <Text style={{fontWeight: 'bold'}}>Sign up</Text>
            </MainText>
          </TouchableOpacity>
        </View>

        <View style={styles.registerArea}>
          <MainText>
            <Text style={styles.emailText}>Already have an account?</Text>
            <Text
              style={{}}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.registerText}> Sign in</Text>
            </Text>
          </MainText>
        </View>
      </View>
    </View>
  );
};

export default Register;
