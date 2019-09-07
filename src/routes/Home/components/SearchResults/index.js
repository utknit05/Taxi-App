import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { View, List, ListItem, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './SearchResultsStyles';

const mapStateToProps = state => {
    return {
        predictions: state.HomeReducer.predictions,
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

class SearchResults extends React.Component {
    render() {
        const { predictions } = this.props;

        return (
            <View style={styles.searchResultsWrapper}>
                <List>
                    {
                        predictions && predictions.map((address,index) =>
                            <ListItem key={index} button avatar>
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