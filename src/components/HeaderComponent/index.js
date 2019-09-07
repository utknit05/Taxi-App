import React from 'react';
import { Text } from 'react-native';
import { Header, Left, Body, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './HeaderComponentStyles';

export const HeaderComponent = () => {
    return (
        <Header style={{ backgroundColor: 'rgba(0, 0, 30, 0.8)' }} iosBarStyle='light-content'>
            <Left>
                <Button transparent>
                    <Icon name='bars' style={styles.icon} />
                </Button>
            </Left>

            <Body>
                <Text style={styles.headerText}>
                    SCO <Icon name='bus' style={styles.icon} />
                </Text>
            </Body>

            <Right>
                <Button transparent>
                    <Icon name='gift' style={styles.icon} />
                </Button>
            </Right>
        </Header>
    );
}

export default HeaderComponent;
