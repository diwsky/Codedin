import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {styles} from './style';
import MainText from '../../Component/MainText';
import {Data} from '../../Data/skill';

const Home = ({navigation, route}) => {
  const imgDrawer = require('../../assets/drawable/burger.png');
  const imgSetting = require('../../assets/drawable/settings.png');
  const imgCatName = require('../../assets/drawable/cat_name.png');
  const imgCatType = require('../../assets/drawable/cat_type.png');
  const imgCatLevel = require('../../assets/drawable/cat_level.png');

  const {username} = route.params;

  const renderSkill = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
          paddingHorizontal: 25,

          alignItems: 'center',
          justifyContent: 'space-between',

          margin: 5,
          width: 300,
        }}>
        <Image source={item.image}></Image>
        <View style={styles.boxSkill}>
          <View style={styles.boxSkillRow}>
            <View style={{width: 25}}>
              <Image source={imgCatName} />
            </View>
            <MainText
              color={setColorLevelText(item.level_text)}
              fontSize={18}>{`${item.level_text} ${item.name}`}</MainText>
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

  const setColorLevel = (input) => {};

  const setColorLevelText = (input) => {
    if (input > 50) {
    } else {
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerOption}>
        <Image source={imgDrawer}></Image>
        <Image source={imgSetting}></Image>
      </View>
      <View style={styles.containerWelcome}>
        <MainText>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Welcome abroad, {'\n ' + username}
          </Text>
        </MainText>
      </View>
      <View style={styles.containerMain}>
        <View style={styles.containerSkill}>
          <MainText>
            <Text style={{fontSize: 24}}>Your Skill</Text>
          </MainText>
          <FlatList
            data={Data}
            renderItem={renderSkill}
            keyExtractor={(item) => item.id}></FlatList>
        </View>
      </View>
    </View>
  );
};

export default Home;
