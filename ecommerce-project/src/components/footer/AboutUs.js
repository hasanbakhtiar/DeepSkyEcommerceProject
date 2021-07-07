import React, { Component } from 'react'

class AboutUs extends Component {
    render() {
        return (

            <div className="col-md-4">
                <h6>About Us</h6>
                <ul>
                    <li>
                        <p>Adress:{this.props.adress} </p>
                    </li>
                    <li>
                        <p>Phone:{this.props.phone}</p>
                    </li>
                    <li>
                        <p>Fax:{this.props.fax}</p>
                    </li>
                    <li>
                        <p>Email:{this.props.email}</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default AboutUs
