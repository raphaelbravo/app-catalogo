/**
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import {emitter} from 'utils';
import styles from './styles';

const Spinner = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    //Setup app loader listener
    emitter.on('loading', setLoading);
    return () => {
      emitter.removeListener('loading', setLoading);
    };
  }, []);
  const close = () => setLoading(false);
  return (
    <Modal
      visible={loading}
      animationType="fade"
      transparent={true}
      onRequestClose={close}>
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};

export {Spinner};
