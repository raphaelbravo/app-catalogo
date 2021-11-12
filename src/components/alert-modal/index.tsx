/**
 *
 * @format
 */
import {Button, MText} from 'components';
import React, {useEffect, useState} from 'react';
import {Modal, View} from 'react-native';
import {emitter, _alert} from 'utils';
import styles from './styles';

export type Config = {
  message: string;
  action?: (res: boolean) => void;
};
const AlertModal = () => {
  const [config, setConfig] = useState<Config | null>(null);

  useEffect(() => {
    //Setup app alert listener
    emitter.on('alert', setConfig);
    return () => {
      emitter.removeListener('alert', setConfig);
    };
  }, []);

  const {message} = config || {message: ''};

  const visible = config !== null;

  const handleAction = (res: boolean) => {
    const {action} = config || {};
    const executeAction = action;

    _alert(null);

    if (executeAction) {
      executeAction(res);
    }
  };

  const onOk = () => handleAction(true);
  const onCancel = () => handleAction(false);

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.backdrop}>
        <View style={styles.container}>
          <MText style={styles.message}>¿{message}?</MText>
          <View style={styles.buttonContainer}>
            <Button onPress={onOk}>OK</Button>
            <View style={styles.spacer} />
            <Button onPress={onCancel}>Cancel</Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export {AlertModal};
