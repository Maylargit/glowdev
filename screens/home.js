import React from 'react';
import { StyleSheet, View, Text, Button, RecyclerViewBackedScrollView } from 'react-native';

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
        /* another method below push method */
        // navigation.push('ReviewDetails');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Home Screen</Text>
            <Button title='got to rev dets' onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        padding: 24
    },
    // titleText: {
    //     fontFamily: 'nunito-bold',
    //     fontSize: 18,
    // }
});