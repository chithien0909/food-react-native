import React from 'react';

import {View, Text, StyleSheet, FlatList, Image} from "react-native";

const ResultsDetail = ({ result, navigation }) => {
    return <View style={styles.box}>
        <Image style={styles.image} source={{uri: result.image_url }}/>
        <Text style={styles.name}>{result.name}</Text>
        <Text>
            {result.rating } Stars, {result.review_count} Reviews
        </Text>
    </View>
};
const styles = StyleSheet.create({
    box: {
        marginRight: 10
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default ResultsDetail;