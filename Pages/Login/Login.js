import React, {useState} from 'react';
import {Text, Image, TextInput, View, TouchableOpacity} from 'react-native';
import {styles} from './Style';
import MainText from '../../Component/MainText';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/drawable/LOGO.png')}></Image>
      <View style={styles.mainColumn}>
        <View style={{alignItems: 'center'}}>
          <MainText>
            <Text style={styles.loginText}>Login</Text>
          </MainText>
        </View>

        <View style={styles.boxLogin}>
          <View>
            <MainText>
              <Text style={styles.emailText}>E-mail/Username</Text>
            </MainText>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={(value) => setUsername(value)}></TextInput>
          </View>

          <View>
            <MainText>
              <Text style={styles.emailText}>Password</Text>
            </MainText>
            <TextInput
              style={styles.input}
              value={password}
              secureTextEntry
              onChangeText={(value) => setPassword(value)}></TextInput>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={styles.buttonSignin}
            onPress={() =>
              navigation.navigate('Home', {
                username,
              })
            }>
            <MainText>
              <Text style={{fontWeight: 'bold'}}>Sign in</Text>
            </MainText>
          </TouchableOpacity>
        </View>

        <View style={styles.registerArea}>
          <MainText>
            <Text style={styles.emailText}>Have no account yet?</Text>
            <Text
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <Text style={styles.registerText}> Register</Text>
            </Text>
          </MainText>
        </View>
      </View>
    </View>
  );
};

export default Login;
