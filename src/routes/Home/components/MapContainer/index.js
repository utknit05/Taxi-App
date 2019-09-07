import React from 'react';
import { connect } from 'react-redux';
import { View } from 'native-base';
import MapView from 'react-native-maps';
import styles from './MapContainerStyles';
import SearchBox from '../SearchBox';
import SearchResults from '../SearchResults';

const mapStateToProps = state => {
    return {
        resultsType: state.HomeReducer.resultsType,
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

class MapContainer extends React.Component {
    render() {
        const { region, resultsType } = this.props;

        return (
            <View style={styles.container}>
                <MapView
                    provider={MapView.PROVIDER_GOOGLE}
                    style={styles.map}
                    region={region}
                >
                    <MapView.Marker
                        coordinate={region}
                        pinColor='blue'
                    />
                </MapView>
                <SearchBox/>
                {
                    resultsType && <SearchResults />
                }
            </View>
        );
    
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
