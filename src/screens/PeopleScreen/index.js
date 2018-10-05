import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import OfflineNotice from '../../OfflineNotice'
export default class PeopleScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <OfflineNotice />
                <Text> PeopleScreen </Text>
            </View>
        );
    }
}
