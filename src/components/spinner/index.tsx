/**
 *
 * @format
 */
import React from 'react';
import {Modal, Text, View} from 'react-native';
import styles from './styles';

interface Props {
  visible: boolean;
}

const Spinner = ({visible}: Props) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    </Modal>
  );
};

export {Spinner};
