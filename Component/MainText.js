import React from 'react';
import {Text} from 'react-native';

const MainText = (props) => {
  return (
    <Text
      style={{
        fontSize: props.fontSize,
        // fontFamily: 'Quicksand-Regular',
        color: props.color,
      }}>
      {' '}
      {props.children}{' '}
    </Text>
  );
};
export default MainText;
