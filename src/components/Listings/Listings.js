import React from 'react';
import PropTypes from 'prop-types';

import {listingShape} from '../../propz/listingprop';
import './Listings.css';

import ListingItem from '../ListingItem/ListingItem';

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(listingShape),
  };

  render () {
    const {listings} = this.props;
    // const listings = this.props.listings; same as above
    const listingsItemComponents = listings.map((item) => {
      return (
        // <li key={item.id}>{item.price}</li>
        <ListingItem
          listing={item}
          key={item.id}
        />
      );
    });
    return (
      <div className="Listings">
        <h2>Listings</h2>
        <ul>
          {listingsItemComponents}
        </ul>
      </div>
    );
  }
}

export default Listings;
