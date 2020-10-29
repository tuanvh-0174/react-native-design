import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

const Horizontal = () => {
    return (
        <ScrollView style={styles.container} horizontal={true} pagingEnabled={true}>
              <View style={styles.outer}>
                    <Text style={styles.innerText}>Welcome to demo app</Text>
                    <Text style={styles.innerText}>Welcome to demo app</Text>
                    <Text style={styles.innerText}>Welcome to demo app</Text>
                    <Text style={styles.innerText}>Welcome to demo app</Text>
                    <Text style={styles.innerText}>Welcome to demo app</Text>
              </View>
              <View style={styles.outerone}>
                  <Text style={styles.innerText}>Welcome to demo app 2</Text>
                  <Text style={styles.innerText}>Welcome to demo app 2</Text>
                  <Text style={styles.innerText}>Welcome to demo app 2</Text>
                  <Text style={styles.innerText}>Welcome to demo app 2</Text>
                  <Text style={styles.innerText}>Welcome to demo app 2</Text>
              </View>
              <View style={[styles.outerone, styles.red]}>
                  <Text style={styles.innerText}>Welcome to demo app 3</Text>
                  <Text style={styles.innerText}>Welcome to demo app 3</Text>
                  <Text style={styles.innerText}>Welcome to demo app 3</Text>
                  <Text style={styles.innerText}>Welcome to demo app 3</Text>
                  <Text style={styles.innerText}>Welcome to demo app 3</Text>
              </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    outer : {
        backgroundColor: '#007bb6',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    },
    innerText : {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',

    },
    outerone : {
            backgroundColor: '#dd4b39',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,

    },
    red : {
            backgroundColor: 'red',

     },
});

export default Horizontal;