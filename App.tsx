import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import LoveLangTest from './src/screens/LoveLangTest/LoveLangTest';
import LoveLangTestResult from './src/screens/LoveLangTest/LoveLangTestResult';
import LoveLangTestStart from './src/screens/LoveLangTest/LoveLangTestStart';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Group screenOptions={{headerTitle: '사랑의 언어 테스트'}}>
          <Stack.Screen
            name="LoveLangTestStart"
            component={LoveLangTestStart}
            options={{
              headerTitle: '',
            }}
          />
          <Stack.Screen name="LoveLangTest" component={LoveLangTest} />
          <Stack.Screen
            name="LoveLangTestResult"
            component={LoveLangTestResult}
            options={{headerTitle: '테스트 결과'}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
