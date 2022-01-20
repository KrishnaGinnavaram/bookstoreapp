import React from 'react';
import { Searchbar } from 'react-native-paper';
function SearchBarComponent({style,placeholder,onChangeText,value}) {
    return (
       <Searchbar
       style={style}
       placeholder={placeholder}
       onChangeText={onChangeText}
       value={value}
       />
    );
}

export default SearchBarComponent;