import React from 'react';
import {View, Text, Image} from 'react-native';
import MainText from './MainText';
import {styles} from './styles';

const SkillSet = (name, level, category) => {
  const imgCatName = require('../assets/drawable/cat_name.png');
  const imgCatType = require('../assets/drawable/cat_type.png');
  const imgCatLevel = require('../assets/drawable/cat_level.png');

  return (
    <View style={styles.eachProfiles}>
      <Image source={generateImage(name)}></Image>
      <View style={styles.boxSkill}>
        <View style={styles.boxSkillRow}>
          <View style={{width: 25}}>
            <Image source={imgCatName} />
          </View>
          <MainText
            color={setColorLevelText(level)}
            fontSize={18}>{`${getUserSkill(level)} ${name}`}</MainText>
        </View>
        <View style={styles.boxSkillRow}>
          <View style={{width: 25}}>
            <Image source={imgCatType} />
          </View>
          <MainText fontSize={18}>{`${category}`}</MainText>
        </View>
        <View style={styles.boxSkillRow}>
          <View style={{width: 25}}>
            <Image source={imgCatLevel} />
          </View>
          <MainText fontSize={18}>{`${level} %`}</MainText>
        </View>
      </View>
    </View>
  );
};
const generateImage = (input) => {
  switch (input) {
    case 'Python':
      return require('../assets/drawable/python.png');
      break;
    case 'Java':
      return require('../assets/drawable/java.png');
      break;
    case 'JavaScript':
      return require('../assets/drawable/js.png');
      break;
    case 'Dart':
      return require('../assets/drawable/dart.png');
      break;
    case 'Django':
      return require('../assets/drawable/django.png');
      break;
    case 'Laravel':
      return require('../assets/drawable/laravel.png');
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
export default SkillSet;
