import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native'

const HomeComponent = ({ messages }) => {
    return (
        <ScrollView>
            {
                messages.length ? messages.map((data, index) =>
                    <Text key={index} style={styles.container}>{data.body}</Text>
                ) : <Text style={styles.container}>No Messages</Text>
            }
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        backgroundColor: 'grey',
        margin: 10,
        textAlign: 'center',
        fontSize: 20,
        padding: 10
    }
});

export default HomeComponent