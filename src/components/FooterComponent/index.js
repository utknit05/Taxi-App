import React from 'react';
import { Text } from 'react-native';
import { Footer, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './FooterComponentStyles';

export const FooterComponent = () => {
    const tabs = [
		{
			title: 'TaxiCar',
			subTitle: '',
			icon: 'car',
		},
		{
			title: 'TaxiShare',
			subTitle: '',
			icon: 'car',
		},
		{
			title: 'Premium',
			subTitle: '',
			icon: 'car',
		},
		{
			title: 'Bike',
			subTitle: '',
			icon: 'car',
		}
	];

    return (
		<Footer>
			<FooterTab style={styles.footerContainer}>
				{
					tabs.map((vehicle, index) => {
						return <Button key={index}>
							<Icon size={20} name={vehicle.icon} color={ (index === 0) ? 'green' : 'grey' }/>
							<Text style={{ fontSize: 12, color: (index === 0) ? 'green' : 'grey' }}>
								{vehicle.title}
							</Text>
							<Text style={styles.subText}>{vehicle.subTitle}</Text>
						</Button>
					})
				}
			</FooterTab>
		</Footer>
    );
}

export default FooterComponent;
