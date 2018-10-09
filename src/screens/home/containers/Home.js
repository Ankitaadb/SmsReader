import React, { Component } from 'react';
import { HomeComponent, ToastAndroid } from '../components'
import SmsListener from 'react-native-android-sms-listener'

class HomeContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        SmsListener.addListener(message => {
            console.log(message)
            ToastAndroid.show(message.body, ToastAndroid.SHORT);
            this.setState({ messages: [...this.state.messages, message] })
        })
    }


    render() {
        return (
            <HomeComponent
                messages={this.state.messages} />

        )
    }
}

export default HomeContainer;
