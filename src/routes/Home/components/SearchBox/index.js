import React from 'react';
import { connect } from 'react-redux';
import RNGooglePlaces from 'react-native-google-places';
import { Text } from 'react-native';
import { View, InputGroup, Input } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getInputData, toggleSearchResults, getAddressPredictions } from '../../modules/home';
import styles from './SearchBoxStyles';

const mapStateToProps = state => {
    return {
        selectedAddress: state.HomeReducer.selectedAddress,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInputData: (key, val) => dispatch(getInputData({ key, val })),
        toggleSearchResults: resultsType => dispatch(toggleSearchResults(resultsType)),
        getAddressPredictions: addressArray => dispatch(getAddressPredictions(addressArray)),
    }
}

class SearchBox extends React.Component {
    getPredictions = val => {
        const { getAddressPredictions } = this.props;
        RNGooglePlaces.getAutocompletePredictions(val,
            {
                country: 'IN',
            }
        )
        .then(res => getAddressPredictions(res))
        .catch(err => console.error(err.message)) // log errors properly
    }

    render() {
        const { getInputData, toggleSearchResults, selectedAddress } = this.props;
        const { pickUp, dropOff } = selectedAddress || {};
        const pickUpPlaceHolder = pickUp ? pickUp.address : 'Choose pick-up locations';
        const dropOffPlaceHolder = dropOff ? dropOff.address : 'Choose drop-off location';
        return (
            <View style={styles.searchBox}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>PICK UP</Text>
                    <InputGroup>
                        <Icon name='search' size={20} color='black'/>
                        <Input
                            style={styles.inputSearch}
                            placeholder={pickUpPlaceHolder}
                            onChangeText={
                                (val) => {
                                    getInputData('pickUp',val);
                                    this.getPredictions(val);
                                }
                            }
                            onFocus={() => toggleSearchResults('pickUp')}
                        />
                    </InputGroup>
                </View>
                <View style={styles.secondInputWrapper}>
                    <Text style={styles.label}>DROP OFF</Text>
                    <InputGroup>
                        <Icon name='search' size={20} color='black'/>
                        <Input
                            style={styles.inputSearch}
                            placeholder={dropOffPlaceHolder}
                            onChangeText={
                                (val) => {
                                    getInputData('dropOff',val)
                                    this.getPredictions(val)
                                }
                            }
                            onFocus={() => toggleSearchResults('dropOff')}
                        />
                    </InputGroup>
                </View>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);