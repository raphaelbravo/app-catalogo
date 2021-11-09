import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Products: undefined;
  Favorites: undefined;
  Details: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();
