import React, {useState} from 'react';
import {
  Text,
  Image,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {styles} from './style';
import MainText from '../../Component/MainText';
import firestore from '@react-native-firebase/firestore';

const addskill = ({navigation}) => {
  const [username, setusername] = useState('');
  const [skillName, setskillName] = useState('');
  const [skillCategory, setskillCategory] = useState('');
  const [skillLevel, setskillLevel] = useState('');

  const onPressSkill = () => {
    firestore()
      .collection('users')
      .add({
        name: username,
        skill: [{name: skillName, category: skillCategory, level: skillLevel}],
      })
      .then(() => {
        Alert.alert('Success', 'Skill added!');
        navigation.navigate('Home');
      });
  };


  
  return (
    <View style={styles.container}>
      <View style={styles.imageSkillContainer}>
        <Image source={require('../../assets/drawable/undefimg.png')} />
      </View>
      <View style={styles.mainContainer}>
        <View style={{alignItems: 'center'}}>
          <Text>Register new Skill</Text>
        </View>
        <View>
          <MainText>
            <Text style={styles.skillStyle}>Username</Text>
          </MainText>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={(value) => setusername(value)}></TextInput>
        </View>
        <View>
          <MainText>
            <Text style={styles.skillStyle}>Skill Name</Text>
          </MainText>
          <TextInput
            style={styles.input}
            value={skillName}
            onChangeText={(value) => setskillName(value)}></TextInput>
        </View>

        <View>
          <MainText>
            <Text style={styles.skillStyle}>Category</Text>
          </MainText>
          <TextInput
            style={styles.input}
            value={skillCategory}
            onChangeText={(value) => setskillCategory(value)}></TextInput>
        </View>
        <View>
          <MainText>
            <Text style={styles.skillStyle}>Level</Text>
          </MainText>
          <TextInput
            style={styles.input}
            value={setskillLevel}
            onChangeText={(value) => setskillLevel(value)}></TextInput>
        </View>

        <View
          style={{
            backgroundColor: '#FFA0A0',
            padding: 10,
            borderRadius: 8,
            alignItems: 'center',
            marginTop: 30,
          }}>
          <TouchableOpacity onPress={() => onPressSkill()}>
            <Text>Add Skill</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default addskill;
