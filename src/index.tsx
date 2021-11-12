/**
 *
 * @format
 */
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {AlertModal, FavoritesIcon, Spinner} from 'components';
import {Stack} from 'navigation';
import React from 'react';
import {StatusBar} from 'react-native';
import {DetailsScreen, FavoritesScreen, ProductsScreen} from 'screens';

const Root = () => {
  const homeOptions = {headerRight: () => <FavoritesIcon />};
  const screenOptions = {
    headerTitleStyle: {fontFamily: 'Montserrat-Bold'},
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator screenOptions={screenOptions}>
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
