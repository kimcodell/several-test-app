import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useMemo, useState} from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LoveLangQuestion from '../../components/LoveLangQuestion';
import data from '../../data/LoveLangTest/data';
import RootStackParamList from '../../navigatorParamList/RootStackParamList';

function LoveLangTest({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'LoveLangTest'>) {
  const dataSet = useMemo(() => data, []);
  const [checked, setChecked] = useState(0);
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
  });
  console.log(result, dataSet[index]);

  const onQuestion1 = useCallback(() => {
    if (checked === 1) {
      return;
    }
    if (checked === 2) {
      setResult(prev => ({
        ...prev,
        [dataSet[index].question1.check]:
          prev[dataSet[index].question1.check] + 1,
        [dataSet[index].question2.check]:
          prev[dataSet[index].question2.check] - 1,
      }));
    } else {
      setResult(prev => ({
        ...prev,
        [dataSet[index].question1.check]:
          prev[dataSet[index].question1.check] + 1,
      }));
    }
    setChecked(1);
  }, [dataSet, index, checked]);

  const onQuestion2 = useCallback(() => {
    if (checked === 2) {
      return;
    }
    if (checked === 1) {
      setResult(prev => ({
        ...prev,
        [dataSet[index].question1.check]:
          prev[dataSet[index].question1.check] - 1,
        [dataSet[index].question2.check]:
          prev[dataSet[index].question2.check] + 1,
      }));
    } else {
      setResult(prev => ({
        ...prev,
        [dataSet[index].question2.check]:
          prev[dataSet[index].question2.check] + 1,
      }));
    }
    setChecked(2);
  }, [dataSet, index, checked]);

  const onPressNext = useCallback(() => {
    if (index === dataSet.length - 1) {
      navigation.navigate('LoveLangTestResult', {result});
      return;
    }
    setChecked(0);
    setIndex(prev => prev + 1);
  }, [navigation, index, dataSet, result]);

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <View style={styles.questionContainer}>
          <LoveLangQuestion
            data={dataSet[index]}
            checked={checked}
            onQuestion1={onQuestion1}
            onQuestion2={onQuestion2}
          />
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPressNext}
            style={styles.nextButtonContainer}>
            <Text style={styles.nextButtonText}>
              {index === dataSet.length - 1 ? '결과보기' : '다음'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  nextButtonContainer: {
    ...Platform.select({
      ios: {
        shadowColor: '#C3C9D3',
        shadowOffset: {
          width: 1,
          height: 4,
        },
        shadowOpacity: 0.8,
        shadowRadius: 2.4,
      },
      android: {elevation: 5},
    }),
    borderRadius: 8,
    paddingVertical: 16,
    marginHorizontal: 20,
    backgroundColor: '#414360',
    alignItems: 'center',
    marginBottom: 40,
  },
  nextButtonText: {
    color: 'white',
    fontWeight: '700',
  },
});

export default LoveLangTest;
