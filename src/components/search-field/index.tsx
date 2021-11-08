/**
 *
 * @format
 */
import {Product} from 'models';
import React, {useEffect, useRef, useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
interface Props {
  handleSearch: (search: string) => any;
  delay: number;
}
const SearchField = ({handleSearch, delay}: Props) => {
  const [search, setSearch] = useState<string>('');
  const debounce = useRef<NodeJS.Timeout | null>(null);
  const onChangeSearch = (str: string) => {
    setSearch(str);
    if (debounce.current) {
      clearTimeout(debounce.current);
    }
    debounce.current = setTimeout(() => handleSearch(str), delay);
  };
  return (
    <View style={styles.container}>
      <TextInput value={search} onChangeText={onChangeSearch} />
    </View>
  );
};

export {SearchField};
