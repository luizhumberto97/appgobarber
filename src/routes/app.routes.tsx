import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false, // Retiramos o header e podemos editar as coisas utilizando headerStyle e HeaderTintColor
      cardStyle: { backgroundColor: '#312e38' }, // Colocamos a cor de fundo
    }}
    // initialRouteName="SignUp" Para usar a tela de cadastro para verificação
  >
    <App.Screen name="Dashboard" component={Dashboard} />
  </App.Navigator>
);

export default AppRoutes;
