import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LoveLangKeys from '../types/LoveLangKeys';
import {LoveLangTestKeyToLang} from '../types/LoveLangTestKeyToLang';

interface LoveLangCountProps {
  data: [LoveLangKeys, number];
  index: number;
}

function LoveLangCount({data, index}: LoveLangCountProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${index}. ${
        LoveLangTestKeyToLang[data[0]]
      }`}</Text>
      <Text>{`${data[1]} 개`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  text: {
    lineHeight: 20,
    color: 'black',
    minWidth: 120,
  },
  count: {
    lineHeight: 20,
    color: 'black',
  },
});

export default LoveLangCount;
