import React, {useCallback} from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from '../navigatorParamList/RootStackParamList';

function HomeScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Home'>) {
  const onPressLoveLangTest = useCallback(() => {
    navigation.navigate('LoveLangTestStart');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Text style={styles.title}>테스트</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPressLoveLangTest}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>5가지 사랑의 언어</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
  },
  title: {
    marginTop: 160,
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 12,
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
    borderWidth: 2,
    width: 160,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#FF69A4',
    borderColor: '#FF24A9',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
  },
});

export default HomeScreen;
