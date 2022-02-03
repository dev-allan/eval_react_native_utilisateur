import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PageListUser from './src/pages/PageListUser';
import PageAddUser from './src/pages/PageAddUser';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListUser">
        <Stack.Screen name="ListUser" component={PageListUser} />
        <Stack.Screen name="AddUser" component={PageAddUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
