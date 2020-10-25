import React from 'react';
import { Text, Modal, StyleSheet } from 'react-native';
import AppButton from './AppButton';
import config from '../config.json';
const APIURI = config.APIURI;

const PointModal = ({visible, setVisible}) => {
    return (
        <Modal 
            animated="slide"
            visible={visible} 
            style={styles.modal}
            >
            <Text>
                hello
            </Text>
            <AppButton 
                backgroundColor="#68BBAF"
                margin={130}
                title="취소"
                size="sm"
                onPress={setVisible(false)} />
        </Modal>
    )
}

export default PointModal;

const styles = StyleSheet.create({
    modal:{
        width: 100,
        height: 100,
    },
})