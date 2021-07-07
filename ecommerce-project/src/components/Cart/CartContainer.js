import React, { Component } from 'react'
import CartItem from './CartItem';
import cardimg1 from '../../img/carditem1.jpg';
import cardimg2 from '../../img/carditem2.jpg';
import cardimg3 from '../../img/carditem3.jpg';
import cardimg4 from '../../img/carditem4.jpg';
import cardimg5 from '../../img/carditem5.jpg';
import cardimg6 from '../../img/carditem6.jpg';
import cardimg7 from '../../img/carditem7.jpg';
import cardimg8 from '../../img/carditem8.jpg';

class CartContainer extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-3">
                  
                    <CartItem cardimgs={cardimg2} cardtitle="Çanta" prices="$69.00" pricedel="$74.00" />
                    <CartItem cardimgs={cardimg3} cardtitle="Şərf" prices="$69.00" pricedel="$74.00"/>
                    <CartItem cardimgs={cardimg4} cardtitle="Kofta" prices="$70.00" pricedel=""/>
                    <CartItem cardimgs={cardimg5} cardtitle="Kurtka" prices="$74.00" pricedel=""/>


                    </div>

                    <div className="row mt-3">
                        
                    <CartItem cardimgs={cardimg6} cardtitle="Kurtka" prices="$84.00" pricedel="" />
                    <CartItem cardimgs={cardimg7} cardtitle="İdman ayaqqabısı" prices="$69.00" pricedel="$74.00"/>
                    <CartItem cardimgs={cardimg1} cardtitle="Köynək" prices="$70.00" pricedel="" />
                    <CartItem cardimgs={cardimg8} cardtitle="Jilet" prices="$78.00-$70.00" pricedel=""/>
    
    
                        </div>
                    </div>

            </div>
        )
    }
}

export default CartContainer
