import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { getCurrentLocation } from '../modules/home';
import { Container } from 'native-base';
import MapContainer from '../components/MapContainer';
import Geolocation from 'react-native-geolocation-service';
import HeaderComponent from '../../../components/HeaderComponent';
import FooterComponent from '../../../components/FooterComponent';

const mapStateToProps = (state) => {
    return {
        region: state.HomeReducer.region,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentLocation: position => dispatch(getCurrentLocation(position)),
    }
}

class Home extends React.Component{
    componentDidMount(){
        Geolocation.getCurrentPosition(
			position => this.props.getCurrentLocation(position.coords),
			error => console.log(error),// Log errors properly once done
			{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
		)
    }

    render() {
        const { region } = this.props;
        return (
            <Container>
                <HeaderComponent />
                { region && region.latitude
                  && <MapContainer region={region} />
                }
                <FooterComponent />
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
