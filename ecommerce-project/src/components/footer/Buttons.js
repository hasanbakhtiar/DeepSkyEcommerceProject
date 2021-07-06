import React, { Component } from 'react'

class Buttons extends Component {
    render() {
        return (
            <div className="col-md-4">
            <h6>Join Our Newsletter Now</h6>
            <p>Exceptional quality. Ethical factories. Sign up to enjoy free U.S. shipping and returns on your first order.</p>
            <input type="email" placeholder="Enter your email" />
            <button>Subsribe</button>
        </div>
        )
    }
}

export default Buttons
