import React, { Component } from 'react';



class CartItem extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div class="card" style={{ width: "20rem" }}>
                    <img src={this.props.cardimgs} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{this.props.cardtitle}</h5>
                        <p class="card-text"><span>{this.props.prices}</span> <del>{this.props.pricedel}</del>  </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem
