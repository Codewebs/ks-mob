import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import StatusList from '@components/StatusList';

import styles from './styles';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

export default class MessagesScreen extends Component {



    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('CameraScreen');
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusList />     
            </View>
        );
    }
}

MessagesScreen.propTypes = {
    navigation: PropTypes.object
};
