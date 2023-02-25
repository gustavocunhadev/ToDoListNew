import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/routes';

//import 'intl';
//import 'intl/loale-data/jsonp/pt-BR';

export default function App(){

  return(
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
  )
}



