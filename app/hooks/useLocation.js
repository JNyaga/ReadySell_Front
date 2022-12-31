import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location'
import logger from '../utility/logger';

const useLocation = () => {
    const [location, setLocation] = useState()

    const getLocation = async () => {
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync();
            if (!granted) return;
            const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync()
            setLocation({ latitude, longitude })

        } catch (error) {
            logger.log(new Error(`${error}`))


        }
    }

    useEffect(() => {
        getLocation()
    }, [])

    return location;

};


export default useLocation;