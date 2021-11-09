/**
 *
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import {AlertModal, FavoritesIcon, Spinner} from 'components';
import {Stack} from 'navigation';
import React from 'react';
import {DetailsScreen, FavoritesScreen, ProductsScreen} from 'screens';

const Root = () => {
  const homeOptions = {headerRight: FavoritesIcon};
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Products"
            component={ProductsScreen}
            options={homeOptions}
          />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Spinner />
      <AlertModal />
    </>
  );
};

export default Root;
