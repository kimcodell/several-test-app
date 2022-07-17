import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useMemo} from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RootStackParamList from '../../navigatorParamList/RootStackParamList';
import LoveLangCount from '../../components/LoveLangCount';
import {LoveLangTestKeyToLang} from '../../types/LoveLangTestKeyToLang';
import data from '../../data/LoveLangTest/data';
import LoveLangKeys from '../../types/LoveLangKeys';

function LoveLangTestResult({
  navigation,
  route: {
    params: {result},
  },
}: NativeStackScreenProps<RootStackParamList, 'LoveLangTestResult'>) {
  const sortedResult = useMemo(() => {
    const arrangedResult = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
    };
    result.forEach((value, index) => {
      if (value === 1) {
        arrangedResult[data[index].question1.check] =
          arrangedResult[data[index].question1.check] + 1;
      } else {
        arrangedResult[data[index].question2.check] =
          arrangedResult[data[index].question2.check] + 1;
      }
    });
    return (Object.entries(arrangedResult) as [LoveLangKeys, number][]).sort(
      (prev, curr) => {
        if (prev[1] < curr[1]) {
          return 1;
        }
        if (prev[1] > curr[1]) {
          return -1;
        }
        return 0;
      },
    );
  }, [result]);

  const onPressHome = useCallback(() => {
    navigation.reset({
      routes: [{name: 'Home'}],
    });
  }, [navigation]);

  const topLang = useMemo(
    () => sortedResult.filter(set => set[1] === sortedResult[0][1]),
    [sortedResult],
  );

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <View style={styles.flex}>
          <View style={styles.resultContainer}>
            <Text style={styles.title}>테스트 결과</Text>
            <View>
              {sortedResult.map((key, index) => (
                <LoveLangCount data={key} key={index} index={index + 1} />
              ))}
            </View>
          </View>
          <Text style={styles.explanation}>
            <Text>{'당신의 사랑의 언어는\n'}</Text>
            {topLang.map((lang, index) => (
              <Text key={index}>{`'${LoveLangTestKeyToLang[lang[0]]}'${
                topLang.length - 1 === index ? '' : ', '
              }`}</Text>
            ))}
            <Text>{'\n입니다!'}</Text>
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            activeOpacity={0.8}
            onPress={onPressHome}>
            <Text style={styles.buttonText}>홈으로</Text>
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
  resultContainer: {
    borderRadius: 16,
    marginTop: 120,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#F3F6FB',
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 20,
  },
  explanation: {
    marginTop: 10,
    marginHorizontal: 20,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
  },
  buttonContainer: {
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
  buttonText: {
    color: 'white',
    fontWeight: '700',
  },
});

export default LoveLangTestResult;
