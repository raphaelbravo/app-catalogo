/**
 *
 * @format
 */
import React, {useRef, useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
interface Props {
  handleSearch: (search: string) => any;
  delay?: number;
}
const SearchField = ({handleSearch, delay = 750}: Props) => {
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
