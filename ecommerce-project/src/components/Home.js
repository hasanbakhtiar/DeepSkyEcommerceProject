import React, { Component } from 'react'
import Slider from './Slider'
import CartContainer from './Cart/CartContainer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Slider />
                <CartContainer />
            </div>
        )
    }
}
