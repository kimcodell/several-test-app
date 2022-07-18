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
  const [historyStack, setHistoryStack] = useState<(1 | 2)[]>([]);
  console.log(historyStack, index);

  const onQuestion1 = useCallback(() => {
    if (checked === 1) {
      return;
    }
    setChecked(1);
    setHistoryStack(prev => {
      const newArray = prev;
      newArray[index] = 1;
      return newArray;
    });
  }, [checked, index]);

  const onQuestion2 = useCallback(() => {
    if (checked === 2) {
      return;
    }
    setChecked(2);
    setHistoryStack(prev => {
      const newArray = prev;
      newArray[index] = 2;
      return newArray;
    });
  }, [index, checked]);

  const onPressNext = useCallback(() => {
    if (checked === 0) {
      return;
    }
    if (index === dataSet.length - 1) {
      navigation.navigate('LoveLangTestResult', {result: historyStack});
      return;
    }
    setChecked(0);
    setIndex(prev => prev + 1);
  }, [navigation, index, dataSet, historyStack, checked]);

  const onPressBack = useCallback(() => {
    setIndex(prev => {
      setChecked(historyStack[prev - 1]);
      return prev - 1;
    });
    // setHistoryStack(prev => {
    //   prev.pop();
    //   const reArray = prev;
    //   return reArray;
    // });
  }, [historyStack]);

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
          {index === 0 ? null : (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onPressBack}
              style={styles.backButtonContainer}>
              <Text style={styles.backButtonText}>뒤로</Text>
            </TouchableOpacity>
          )}
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
  backButtonContainer: {
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
    borderWidth: 2,
    borderColor: '#414360',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButtonText: {
    color: '#414360',
    fontWeight: '700',
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
