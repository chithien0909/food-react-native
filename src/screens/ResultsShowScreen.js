import React, {useEffect, useState} from 'react';

import {View, Text, StyleSheet, FlatList, Image, ScrollView} from 'react-native';
import yelp from "../api/yelp";

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const [reviews, setReviews] = useState(null);
    const id  = navigation.getParam('id');
    const getResult =async (id) => {
        const result = await yelp.get(`/${id}`);
        const reviews = await yelp.get(`/${id}/reviews`);


        setResult(result.data);

        setReviews(reviews.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);
    if(!result){
        return null;
    }
    return <View style={styles.container}>
                <Text style={styles.name}>{result.name}</Text>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{marginBottom: 80}}>
                    <View style={styles.row}>
                        <View >
                            <Text style={styles.subTitle}>Rating</Text>
                            <Text style={styles.text}>{result.rating} Stars</Text>
                        </View>
                        <View>
                            <Text style={styles.subTitle}>Open</Text>
                            <Text style={styles.text}>{result.is_closed ? 'Close' : 'Open'}</Text>
                        </View>
                        <View>
                            <Text style={styles.subTitle}>Categories</Text>
                            <Text style={styles.text}>{result.categories[0].title}</Text>
                        </View>
                    </View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={result.photos}
                        keyExtractor={(photo) => photo}
                        renderItem={({item}) => {
                            return <Image
                                style={styles.image}
                                source={{uri: item}} />
                        }}
                    />
                    <View>
                        <Text style={styles.text}><Text style={styles.title}>Location</Text>: {result.location.city}/{result.location.country}</Text>
                    </View>
                    <Text style={styles.title}>Reviews</Text>
                    {
                        reviews !=null &&
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={reviews.reviews}
                            keyExtractor={(review) => review}
                            renderItem={({item}) => {
                                return <View style={styles.review}>
                                    <View>

                                        <Text style={styles.title}>{item.user.name}: </Text>
                                        <Text style={styles.description}>Rating:
                                            {item.rating} stars
                                        </Text>
                                        <Image
                                            style={styles.avatar}
                                            source={{uri: item.user.image_url}} />

                                    </View>
                                    <Text style={styles.description}>{item.text}</Text>
                                </View>
                            }}
                        />
                    }
                </ScrollView>
         </View>
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,

    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#d9d9d9',
        marginBottom: 10,
        paddingBottom: 5
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center'
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 4,
        marginBottom: 10,
        alignItems: 'center',
        marginRight: 10,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginBottom: 10,
        alignItems: 'center',
    },
    title: {

        fontSize: 16,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text:{
        fontSize: 16,
        textAlign: 'center'
    },
    description:{
        fontSize: 16,
    },
    review: {
        borderBottomColor: '#f5f5f5',
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginBottom: 5
    }

});

export default ResultsShowScreen;