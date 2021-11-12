/**
 *
 * @format
 */
import {MText} from 'components';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';

interface Props {
  action: () => void;
}

const LoadMore = ({action}: Props) => {
  return (
    <TouchableOpacity onPress={action} style={styles.container}>
      <MText style={styles.link}>Ver mas</MText>
    </TouchableOpacity>
  );
};

export {LoadMore};
