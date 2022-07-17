import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RootStackParamList from '../../navigatorParamList/RootStackParamList';

function LoveLangTestStart({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'LoveLangTestStart'>) {
  const onPressStart = useCallback(() => {
    navigation.navigate('LoveLangTest');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Text style={styles.title}>5가지 사랑의 언어 테스트</Text>
        <Text style={styles.content}>
          <Text>
            {
              "개리 채프먼 박사의 저서 '5가지 사랑의 언어'에 수록된 테스트입니다.\n\n"
            }
          </Text>
          <Text>{'1. 인정하는 말\n'}</Text>
          <Text>{'2. 함께하는 시간\n'}</Text>
          <Text>{'3. 선물\n'}</Text>
          <Text>{'4. 봉사\n'}</Text>
          <Text>{'5. 스킨십\n\n'}</Text>
          <Text>당신의 사랑의 언어는 무엇일지 테스트해 보세요!</Text>
        </Text>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.buttonContainer}
            onPress={onPressStart}>
            <Text style={styles.buttonText}>시작</Text>
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
  title: {
    textAlign: 'center',
    marginTop: 100,
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 12,
  },
  content: {
    flex: 1,
    color: '#414360',
    lineHeight: 20,
    paddingHorizontal: 40,
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
    backgroundColor: '#414360',
    alignItems: 'center',
    margin: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
  },
});

export default LoveLangTestStart;
