import React, {Component, useState, useEffect} from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MainText from '../../Component/MainText';
import {styles} from './Style';
import ItemProfile from './ItemProfile/ItemProfile';
import firestore from '@react-native-firebase/firestore';

const Profile = ({navigation}) => {
  const [profiles, setProfiles] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/drawable/burger.png')}></Image>
        <Image source={require('../../assets/drawable/settings.png')}></Image>
      </View>

      <View style={styles.content}>
        <View style={styles.textHeader}>
          <MainText>
            <Text style={styles.headerText}>Your Profile</Text>
          </MainText>
        </View>

        <View style={styles.body}>
          <View style={styles.profPic}>
            <Image
              style={{borderRadius: 75, height: 150, width: 150}}
              source={require('../../assets/drawable/pp.jpg')}></Image>
          </View>

          <View>
            <TouchableOpacity onPress={() => navigation.navigate('AddSkill')}>
              <Image source={require('../../assets/drawable/add.png')} />
            </TouchableOpacity>
          </View>
          {/* Skill profile */}
          {/* <View style={styles.containerSkill}>
              <MainText>
                <Text style={{fontSize: 24}}>Your Skill</Text>
              </MainText>
              <FlatList
                data={profiles}
                renderItem={renderSkill}
                keyExtractor={(item) => item.id}></FlatList>
            </View> */}

          <MainText>
            <Text style={styles.fontStyle}>Portofolio</Text>
          </MainText>

          <View style={styles.porto}>
            <ItemProfile
              imageUri={require('../../assets/drawable/github.png')}
              text={`@diwsky`}
            />
            <ItemProfile
              imageUri={require('../../assets/drawable/gitlab.png')}
              text={`@diwang270`}
            />

            <ItemProfile
              imageUri={require('../../assets/drawable/maven.png')}
              text={'Diwang'}></ItemProfile>
          </View>

          <MainText>
            <Text style={styles.fontStyle}>Social Media</Text>
          </MainText>
          <View style={styles.porto}>
            <ItemProfile
              imageUri={require('../../assets/drawable/facebook.png')}
              text={`Diwangkoro`}></ItemProfile>
            <ItemProfile
              imageUri={require('../../assets/drawable/twitter.png')}
              text="@wankero"></ItemProfile>
            <ItemProfile
              imageUri={require('../../assets/drawable/steam.png')}
              text={`Serperone`}></ItemProfile>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
