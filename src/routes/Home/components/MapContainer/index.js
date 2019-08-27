import React from 'react';
import { View } from 'native-base';
import MapView from 'react-native-maps';
import styles from './MapContainerStyles';

const MapContainer = ({ region }) => {
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
        </View>
    );
};

export default MapContainer;
