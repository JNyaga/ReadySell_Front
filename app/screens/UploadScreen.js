/* Screen to show progress of an upload to server */
import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import * as Progress from 'react-native-progress'
import LottieView from "lottie-react-native"

import colors from '../config/colors';



const UploadScreen = ({ progress = 0, visible = false, onDone }) => {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {/* <AppText>{progress * 100}%</AppText> */}
                {progress < 1 ?
                    <Progress.Bar progress={progress} color={colors.primary} width={200} />
                    :
                    <LottieView
                        autoPlay
                        loop={false}
                        onAnimationFinish={onDone}
                        source={require('../assets/animations/done.json')}
                        style={styles.animation}
                    />
                }
            </View>
        </Modal>
    );
}

export default UploadScreen

const styles = StyleSheet.create({
    animation: {
        width: 150,
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})