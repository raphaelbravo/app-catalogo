/**
 *
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FavoritesIcon, Spinner} from 'components';
import {RootStackParamList} from 'navigation';
import React, {useEffect, useState} from 'react';
import DetailsScreen from 'screens/Details';
import FavoritesScreen from 'screens/Favorites';
import ProductsScreen from 'screens/Products';
import {emitter} from 'utils';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Root = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    emitter.on('loading', setLoading);
    return () => {
      emitter.removeListener('loading', setLoading);
    };
  }, []);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Products"
            component={ProductsScreen}
            options={{headerRight: FavoritesIcon}}
          />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Spinner visible={loading} />
    </>
  );
};

export default Root;
