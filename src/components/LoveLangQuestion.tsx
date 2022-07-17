import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LoveLangKeys from '../types/LoveLangKeys';

interface LoveLangQuestionProps {
  data: {
    question1: {
      content: string;
      check: LoveLangKeys;
    };
    question2: {
      content: string;
      check: LoveLangKeys;
    };
  };
  checked: number;
  onQuestion1: () => void;
  onQuestion2: () => void;
}

function LoveLangQuestion({
  data,
  checked,
  onQuestion1,
  onQuestion2,
}: LoveLangQuestionProps) {
  const {question1, question2} = data;

  const onPressQuestion1 = useCallback(() => {
    onQuestion1();
  }, [onQuestion1]);
  const onPressQuestion2 = useCallback(() => {
    onQuestion2();
  }, [onQuestion2]);

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.buttonContainer,
          checked === 1 && styles.checkedButtonContainer,
        ]}
        onPress={onPressQuestion1}>
        <Text
          style={StyleSheet.compose(styles.buttonText, [
            checked === 1 ? styles.checkedButtonText : {},
          ])}>
          {question1.content}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.buttonContainer,
          checked === 2 && styles.checkedButtonContainer,
        ]}
        onPress={onPressQuestion2}>
        <Text
          style={StyleSheet.compose(styles.buttonText, [
            checked === 2 ? styles.checkedButtonText : {},
          ])}>
          {question2.content}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexBasis: '100%',
  },
  buttonContainer: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#414360',
    padding: 10,
    marginVertical: 6,
  },
  buttonText: {
    color: 'black',
  },
  checkedButtonContainer: {
    backgroundColor: '#414360',
  },
  checkedButtonText: {
    color: 'white',
  },
});

export default LoveLangQuestion;
