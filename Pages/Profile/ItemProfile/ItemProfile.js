import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './Style';
import MainText from '../../../Component/MainText';

const ItemProfile = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.imageUri}></Image>
      <MainText>
        <Text>{props.text}</Text>
      </MainText>
    </View>
  );
};

export default ItemProfile;
