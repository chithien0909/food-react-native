import React, {useState} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import Constants from 'expo-constants';
const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState('Pasta');
    const [searchApi, results, errorMessage] = useResults();
    const filterResultByPrice = (price) => {
        return results.filter(result => {
           return result.price === price;
        });
    };

    if(!results.length) return null;
    return <View style={styles.container}>

        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit ={() => searchApi(term)}
        />
        <Text>Search: {term}</Text>
        {
            errorMessage ?
                <Text>{errorMessage}</Text> : null
        }
        <ScrollView showsVerticalScrollIndicator={false}
            >
            <ResultsList
                results={filterResultByPrice('$')}
                title="Cost Effective"
            />
            <ResultsList
                results={filterResultByPrice('$$')}
                title="Bit Pricier"

            />
            <ResultsList
                results={filterResultByPrice('$$$')}
                title="Big Spender"
            />
        </ScrollView>
    </View>
};


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        // marginTop: Constants.statusBarHeight,
        paddingTop: 10,
        flex: 1
    }

});
export default SearchScreen;