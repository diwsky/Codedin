import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, ScrollView} from 'react-native';
import {styles} from './style';
import MainText from '../../Component/MainText';
import {Data} from '../../Data/skill';
import firestore from '@react-native-firebase/firestore';

const Home = ({navigation}) => {
  const imgDrawer = require('../../assets/drawable/burger.png');
  const imgSetting = require('../../assets/drawable/settings.png');
  const imgCatName = require('../../assets/drawable/cat_name.png');
  const imgCatType = require('../../assets/drawable/cat_type.png');
  const imgCatLevel = require('../../assets/drawable/cat_level.png');

  const [loading, setLoading] = useState(true);

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .onSnapshot((querySnapShot) => {
        const temp = [];

        console.log(`Total user data: `, querySnapShot.size);

        querySnapShot.forEach((doc) => {
          temp.push({key: doc.id, ...doc.data()});
        });

        setLoading(false);
        setProfiles(temp);
      });
    return () => subscriber();
  }, []);

  const renderDb = ({item}) => {
    console.log('Test from renderDb, profile:', item);
    return (
      <View style={styles.containerSkill}>
        <MainText>
          <Text style={{fontSize: 24}}>{item.name}'s Skill</Text>
        </MainText>
        <FlatList
          data={item.skill}
          renderItem={renderSkill}
          keyExtractor={(item, idx) => idx}></FlatList>
      </View>
    );
  };
  const renderSkill = ({item}) => {
    return (
      <View style={styles.eachProfiles}>
        <Image source={generateImage(item.name)}></Image>
        <View style={styles.boxSkill}>
          <View style={styles.boxSkillRow}>
            <View style={{width: 25}}>
              <Image source={imgCatName} />
            </View>
            <MainText
              color={setColorLevelText(item.level)}
              fontSize={18}>{`${getUserSkill(item.level)} ${
              item.name
            }`}</MainText>
          </View>
          <View style={styles.boxSkillRow}>
            <View style={{width: 25}}>
              <Image source={imgCatType} />
            </View>
            <MainText fontSize={18}>{`${item.category}`}</MainText>
          </View>
          <View style={styles.boxSkillRow}>
            <View style={{width: 25}}>
              <Image source={imgCatLevel} />
            </View>
            <MainText fontSize={18}>{`${item.level} %`}</MainText>
          </View>
        </View>
      </View>
    );
  };

  const generateImage = (input) => {
    switch (input) {
      case 'Python':
        return require('../../assets/drawable/python.png');
        break;
      case 'Java':
        return require('../../assets/drawable/java.png');
        break;
      case 'JavaScript':
        return require('../../assets/drawable/js.png');
        break;
      case 'Dart':
        return require('../../assets/drawable/dart.png');
        break;
      case 'Django':
        return require('../../assets/drawable/django.png');
        break;
      case 'Laravel':
        return require('../../assets/drawable/laravel.png');
        break;
    }
  };

  const getUserSkill = (input) => {
    if (input > 0 && input < 50) {
      return 'Basic';
    } else if (input >= 50 && input < 75) {
      return 'Med';
    } else if (input >= 75 && input <= 100) {
      return 'Expert';
    } else {
      return 'Err';
    }
  };

  const setColorLevelText = (input) => {
    if (input > 0 && input < 50) {
      return '#00b83d';
    } else if (input >= 50 && input < 75) {
      return '#a30000';
    } else if (input >= 75 && input <= 100) {
      return '#b201a6';
    } else {
      return '#000000';
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerOption}>
          <Image source={imgDrawer}></Image>
          <Image source={imgSetting}></Image>
        </View>
        <View style={styles.containerWelcome}>
          <MainText>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Welcome abroad, {'\n Diwang'}
            </Text>
          </MainText>
        </View>
        <View style={styles.containerMain}>
          {/* Skil orang */}

          <FlatList
            data={profiles}
            renderItem={renderDb}
            keyExtractor={(profile) => profile.key}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
