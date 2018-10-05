import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default class FloatingButton extends Component {

render() {

	return (
		<View>
		 <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>

        </View>
	);
}
}
