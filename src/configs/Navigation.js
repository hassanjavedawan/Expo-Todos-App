import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import { Image } from 'react-native'





const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
           headerStyle: {
            backgroundColor: '#FFFFFF',
           
          }
          , headerTitle: props => <Image style={{ height: 100, width: 120, resizeMode: 'contain', marginTop: 15 ,justifyContent:'center',alignItems:'center',flex:1}}
          source={require('../../assets/pic.png')} />
        }}
         name="Todos" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;