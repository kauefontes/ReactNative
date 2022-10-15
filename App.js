import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CardComponent from "./CardComponent";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Text style={styles.title}>React Native App!</Text>
            <ScrollView>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A2A2A',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    },
    title: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 24
    }
});
