import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function ReviewDetails({ navigation }) {

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text>ReviewDetails Screen</Text>
            <Button title='back to home screen' onPress={pressHandler} />
        </View>
    )
}



// const ReviewDetails = ({ navigation }) => {
//     const popHandler = () => {
//     navigation.pop()
//       //navigation.goBack
//     }
//     // const pushHandler = () => {
//     // navigation.push("Home")
//     // }
//     return (
//     <View style={styles.container}>
//     <Text>ReviewDetails</Text>
//     <Button title="go to home POP" onPress={popHandler} />
//     {/* <Text> </Text>
//     <Button title="go to home PUSH" onPress={pushHandler} /> */}
//     </View>
//     )
//     }
//     export default ReviewDetails


const styles = StyleSheet.create ({
    container: {
        padding: 24
    }
});