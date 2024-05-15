import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';
import withRouter from '../utils/withRouter';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/Inform.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faTruck} from '@fortawesome/free-solid-svg-icons';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import Header from './HeaderComponent';
import Menu from './MenuComponent';

class Inform extends Component {
  static contextType = MyContext;
  constructor(props) {
    super(props);
    this.state = {
        categories: [],
      txtKeyword: ''
    };
  }
  render() {
    const { mycart } = this.context;

    return (
 
      <div className='header-inform'>
        <Header />
        <Menu className="header-inform-menu"/>
      </div>
    );
  }

 // event-handlers
 btnSearchClick(e) {
  e.preventDefault();
  this.props.navigate('/product/search/' + this.state.txtKeyword);
}
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }
}
export default withRouter(Inform);
