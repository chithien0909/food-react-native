import React from 'react';
import { StyleSheet, Text, View,
    TextInput
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return <View style={styles.background}>
        <Feather style={styles.iconSearch} name='search'/>
        <TextInput
            placeholder='Search'
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.searchInput}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />

    </View>
};


const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 5,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        shadowOffset: {width: 2, height: 5},
        shadowColor: '#fff',
        shadowOpacity: 0.2,
        elevation: 5,
        shadowRadius: 0.8 * 5

    },
    iconSearch:{
        fontSize: 25,
        alignSelf: 'center',
    },
    searchInput: {
        paddingHorizontal: 15,
        height: '100%',
        flex: 1,
    }
});

export default SearchBar;