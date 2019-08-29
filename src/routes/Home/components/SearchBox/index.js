import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { View, InputGroup, Input } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getInputData } from '../../modules/home';
import styles from './SearchBoxStyles';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInputData: (key, val) => dispatch(getInputData({key,val})),
    }
}

class SearchBox extends React.Component {
    render() {
        const { getInputData } = this.props;
        return (
            <View style={styles.searchBox}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>PICK UP</Text>
                    <InputGroup>
                        <Icon name='search' size={20} color='black'/>
                        <Input style={styles.inputSearch} placeholder='Choose pick-up location' onChangeText={(val) => getInputData('pickUp',val)}/>
                    </InputGroup>
                </View>
                <View style={styles.secondInputWrapper}>
                    <Text style={styles.label}>DROP OFF</Text>
                    <InputGroup>
                        <Icon name='search' size={20} color='black'/>
                        <Input style={styles.inputSearch} placeholder='Choose drop-off location' onChangeText={(val) => getInputData('dropOff',val)}/>
                    </InputGroup>
                </View>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);