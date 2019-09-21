import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { View, List, ListItem, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './SearchResultsStyles';
import RNGooglePlaces from 'react-native-google-places';
import { getSelectedAddress, getDistanceMatrix } from '../../modules/home';
import { DISTANCE_MATRIX_END_POINT, GOOGLE_API_KEY } from '../../modules/constants';

const mapStateToProps = state => {
    return {
        predictions: state.HomeReducer.predictions,
        resultsType: state.HomeReducer.resultsType,
        selectedAddress: state.HomeReducer.selectedAddress,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSelectedAddress: payload => dispatch(getSelectedAddress(payload)),
        getDistanceMatrix: payload => dispatch(getDistanceMatrix(payload)),
    }
}

class SearchResults extends React.Component {
    
    selectAddress = (placeID) => {
        const { getSelectedAddress, resultsType, selectedAddress, getDistanceMatrix } = this.props;
        RNGooglePlaces.lookUpPlaceByID(placeID)
        .then(res => {
            const selectedAddressPayload = {
                key: resultsType,
                val: res,
            }

            getSelectedAddress(selectedAddressPayload);
        })
        .then(() => {
            const { pickUp, dropOff } = selectedAddress || {};
            if(pickUp && dropOff){
                const origins = `origins=${pickUp.location.latitude},${pickUp.location.longitude}`;
                const destinations = `destinations=${dropOff.location.latitude},${dropOff.location.longitude}`;
                const mode = 'mode=driving';
                const key = `key=${GOOGLE_API_KEY}`;
                fetch(`${DISTANCE_MATRIX_END_POINT}?${origins}&${destinations}&${mode}&${key}`)
                .then(res => {
                    console.log(res);
                    getDistanceMatrix(res.body);
                })
                .catch(err => console.log('Error in fetching data from Distance matrix API : ', err))// Handle such errors properly
            }
        })
        .catch(err => {
            console.log('Error in SearchResults : ', err); // Handle such errors properly
        })
    }

    render() {
        const { predictions } = this.props;

        return (
            <View style={styles.searchResultsWrapper}>
                <List>
                    {
                        predictions && predictions.map((address,index) =>
                            <ListItem onPress={() => this.selectAddress(address.placeID)} key={index} button avatar>
                                <Left style={styles.leftContainer}>
                                    <Icon style={styles.leftIcon} name='location-on' />
                                </Left>
                                <Body>
                                    <Text style={styles.primaryText}>{address.primaryText}</Text>
                                    <Text style={styles.secondaryText}>{address.secondaryText}</Text>
                                </Body>
                            </ListItem>
                        )
                    }
                </List>
            </View>
        )    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);