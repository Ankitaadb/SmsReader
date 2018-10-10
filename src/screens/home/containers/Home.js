import React, { Component } from 'react';
import { HomeComponent } from '../components'
import SmsListener from 'react-native-android-sms-listener'
import { ToastAndroid, PermissionsAndroid, Platform } from 'react-native'

class HomeContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        if (Platform.OS === 'android')
            this.requestCameraPermission()
        SmsListener.addListener(message => {
            ToastAndroid.show(message.body, ToastAndroid.TOP);
            this.setState({ messages: [...this.state.messages, message] })
        })
    }

    requestCameraPermission = () => {
        try {
            const granted = PermissionsAndroid.requestMultiple(
                [PermissionsAndroid.PERMISSIONS.READ_SMS, PermissionsAndroid.PERMISSIONS.RECEIVE_SMS]
            )
        } catch (err) {
        }
    }


    render() {
        return (
            <HomeComponent
                messages={this.state.messages} />

        )
    }
}

export default HomeContainer;
