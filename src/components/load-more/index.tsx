/**
 *
 * @format
 */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

interface Props {
  action: () => void;
}

const LoadMore = ({action}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={action}>
        <Text>Ver mas</Text>
      </TouchableOpacity>
    </View>
  );
};

export {LoadMore};
