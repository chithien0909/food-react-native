import React from 'react';

import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from 'react-navigation';
const ResultsList = ({title, results, navigation}) => {
    if(!results.length){
        return  null;
    }
    return (
        <View style={styles.box}>
             <Text style={styles.title}>{title}</Text>
            <FlatList
                data={results}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={result => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={()=>(
                                navigation.navigate('ResultsShow',{
                                    id: item.id
                                })
                            )}
                        >
                            <ResultsDetail
                                result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
      marginBottom: 10
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);