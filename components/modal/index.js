import { StyleSheet, Text, View, Modal, Alert, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../assets/color'
import { Dimensions } from 'react-native'
import { Button } from '../button'
import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

export default function ModalTnc({ setChecked }) {
    const [modalVisible, setmodalVisible] = useState(false)
    return (
        <View>
            <Modal
                animationType='fade'
                trasparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('modal has been closed.')
                }}
                hasBackdrop={true}
            >

                <View style={styles.container}>
                    <View style={styles.modalView}>
                        <Ionicons
                            name='close' size={25}
                            onPress={() => {
                                setmodalVisible(false)
                            }}
                            style={{ position: 'absolute', zIndex: 99, right: 10, top: 10 }} />
                        <ScrollView>
                            <View style={{ flex: 1, gap: 16, padding: 33 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Term and Condition</Text>
                                <Text>
                                    In General
                                    [Your Company Name] (“[Your Online Store URL]”) owns and operate this Website.  This document governs your relationship with [Your Online Store URL] (“Website”). Access to and use of this Website and the products and services available through this Website (collectively, the "Services") are subject to the following terms, conditions and notices (the "Terms of Service"). By using the Services, you are agreeing to all of the Terms of Service, as may be updated by us from time to time. You should check this page regularly to take notice of any changes we may have made to the Terms of Service.
                                </Text>

                                <Text>
                                    Access to this Website is permitted on a temporary basis, and we reserve the right to withdraw or amend the Services without notice. We will not be liable if for any reason this Website is unavailable at any time or for any period. From time to time, we may restrict access to some parts or all of this Website.
                                    This Website may contain links to other websites (the "Linked Sites"), which are not operated by [Your Online Store URL]. [Your Online Store URL] has no control over the Linked Sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them. Your use of the Linked Sites will be subject to the terms of use and service contained within each such site.
                                </Text>

                                <View>
                                    <Text style={styles.subHeading}>
                                        Privacy Policy
                                    </Text>
                                    <Text>
                                        Our privacy policy, which sets out how we will use your information, can be found at [Privacy Policy Link]. By using this Website, you consent to the processing described therein and warrant that all data provided by you is accurate.
                                    </Text>
                                </View>

                                <View>
                                    <Text style={styles.subHeading}>
                                        Prohibitions
                                    </Text>
                                    <Text>
                                        You must not misuse this Website. You will not: commit or encourage a criminal offense; transmit or distribute a virus, trojan, worm, logic bomb or any other material which is malicious, technologically harmful, in breach of confidence or in any way offensive or obscene; hack into any aspect of the Service; corrupt data; cause annoyance to other users; infringe upon the rights of any other person's proprietary rights; send any unsolicited advertising or promotional material, commonly referred to as "spam"; or attempt to affect the performance or functionality of any computer facilities of or accessed through this Website. Breaching this provision would constitute a criminal offense and [Your Online Store URL] will report any such breach to the relevant law enforcement authorities and disclose your identity to them.
                                    </Text>
                                </View>

                                <View>
                                    <Text style={styles.subHeading}>
                                        Intellectual Property, Software and Content
                                    </Text>
                                    <Text>
                                        The intellectual property rights in all software and content (including photographic images) made available to you on or through this Website remains the property of [Your Online Store URL] or its licensors and are protected by copyright laws and treaties around the world. All such rights are reserved by [Your Online Store URL] and its licensors. You may store, print and display the content supplied solely for your own personal use. You are not permitted to publish, manipulate, distribute or otherwise reproduce, in any format, any of the content or copies of the content supplied to you or which appears on this Website nor may you use any such content in connection with any business or commercial enterprise.
                                    </Text>
                                </View>

                                <View>
                                    <Text style={styles.subHeading}>
                                        Terms of Sale
                                    </Text>
                                    <Text>
                                        By placing an order you are offering to purchase a product on and subject to the following terms and conditions. All orders are subject to availability and confirmation of the order price.
                                        Dispatch times may vary according to availability and subject to any delays resulting from postal delays or force majeure for which we will not be responsible.
                                    </Text>
                                </View>

                                <Button
                                    style={styles.button}
                                    title={'I Agree'}
                                    onClick={() => {
                                        setmodalVisible(!modalVisible)
                                        setChecked(true)
                                    }}
                                    textColor={COLORS.white}
                                />
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>

            <Pressable onPress={() => setmodalVisible(true)}>
                <Text style={{ color: COLORS.white }}>I agree with the terms and condition</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100
    },
    modalView: {
        backgroundColor: COLORS.white,
        borderRadius: 20,
        alignItems: 'flex-start',
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
        marginVertical: 20,
        backgroundColor: COLORS.primary,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subHeading: {
        fontWeight: 'bold',
        fontSize: 16
    }
})