import { StyleSheet, Text, View, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import React, { useState, useEffect } from 'react'

const MapViewScreen = ({ route }) => {
    const [mapRegion, setMapRegion] = useState({
        latitude: -1.34567,
        longitude: 37.24679,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    const listing = route.params
    const userLocation = () => {
        if (route.params.location) {
            const { location } = route.params
            setMapRegion({
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            })

        }
    }
    useEffect(() => {
        userLocation()
    }, [])
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                region={mapRegion}
            >
                <Marker
                    coordinate={mapRegion}
                    title={`${listing.userId.name} [${mapRegion.latitude},${mapRegion.longitude} ]`}

                />
            </MapView>
        </View>
    )
}

export default MapViewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})