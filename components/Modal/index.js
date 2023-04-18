import { StyleSheet, Text, View, Modal, Alert, Pressable } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../assets/color'
import { Dimensions } from 'react-native'

export default function ModalTnc() {
    const [modalVisible, setmodalVisible] = useState(false)
    return (
        <View>
            <Modal animationType='slide'
                trasparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('modal has been closed.')
                }}
                hasBackdrop={false}
            >

                <View style={styles.container}>
                    <View style={styles.modalView}>
                        <Text>
                            Lorem ipsum dolor sit amet. Hic deleniti repellat aut magni ipsam qui ducimus dolorem. Id alias galisum est praesentium dicta sit exercitationem architecto qui cumque perferendis est obcaecati sint est quaerat expedita et illo ipsam. Ex itaque omnis ex suscipit alias id ratione blanditiis aut dolorem quos At soluta officia aut iusto quam?

                            Eum vero itaque a excepturi labore ea consequatur beatae ut necessitatibus velit. A perspiciatis quia sed alias illo et perferendis beatae qui quia officia sed officiis cupiditate vel autem quisquam eum explicabo nemo!

                            Et internos sapiente est repellendus fugiat nam nulla saepe et rerum quos. Et iure consectetur sed assumenda provident ad doloribus consectetur. Ab voluptatibus provident ea adipisci molestiae qui odit quia sed quibusdam quam. Et quia labore ex nobis possimus eos itaque unde sit laudantium illo.
                        </Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setmodalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable onPress={() => setmodalVisible(true)}>
                <Text>I agree with the terms and condition</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalView: {
        marginVertical: 100,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        flex: 1,
        width: Dimensions.get('window').width - 20
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: COLORS.secondary
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})