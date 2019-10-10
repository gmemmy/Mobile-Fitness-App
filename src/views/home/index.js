import React, { Component, Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class Home extends Component {
  render() {
    return (
     <View style={styles.container}>
       <View style={[styles.upperHalf, styles.alignElements]}>
        <Text style={styles.title}>Mobile Fitness App</Text>
       </View>
       <View style={[styles.lowerHalf, styles.alignElements]}>
        
       </View>
     </View>
    )
  }
}

export default Home;