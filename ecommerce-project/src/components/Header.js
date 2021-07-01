import React, { Component } from 'react';
import logo from '../img/logo.png';

  class MenuItem extends Component {
    render() {
    return(
        <div>
             <li className="nav-item dropdown  me-4">
                <p className="nav-link  active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 {this.props.title}
                </p>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li><p className="dropdown-item" href="#">Test Item</p></li>
                  <li><p className="dropdown-item" href="#">Test Item</p></li>
                  <li><p className="dropdown-item" href="#">Test Item</p></li>
                  <li><p className="dropdown-item" href="#">Test Item</p></li>
                  <li><p className="dropdown-item" href="#">Test Item</p></li>

                </ul>
              </li>
        </div>
        )
    }
}

class Header extends Component {
    
    render() {
        return (
        <header >
        <nav className="navbar navbar-expand-lg navbar-light ec-nav">
        <div className="container-fluid">
          <img className="navbar-brand" src={logo} width='130' />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
             
             
             <MenuItem title="Home"/>
             <MenuItem title="Shop"/>
             <MenuItem title="Blog"/>
             <MenuItem title="Pages"/>

             <li class="nav-item ">
          <p class="nav-link active" href="#">Contact Us</p>
        </li>



              


              
            </ul>
            
            <form className="d-flex align-items-center">
            <i class="fas fa-search "></i>
            <ul className="navbar-nav me-3 ms-3 mb-2 mb-lg-0 ">
                    <MenuItem title="My Account"/>
            </ul>   
           
              <button className="btn btn-outline-success" type="submit"><i class="fas fa-shopping-cart me-1"></i> 0 Items</button>
            </form>
          </div>
        </div>
      </nav>
            </header>
        )
    }
}

export default Header
