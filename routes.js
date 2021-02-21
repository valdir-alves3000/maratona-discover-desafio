import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Modal from './src/screens/Modal';
import Home from './src/screens/Home';

const { Navigator, Screen } = createStackNavigator();

 const Routes = () => {
   return (
     <NavigationContainer>
       <Navigator screenOptions={{ headerShown: false }}>
         <Screen name="Home" component={Home} />
         <Screen name="Modal" component={Modal} />
       </Navigator>

     </NavigationContainer>
   );

}

export default Routes;