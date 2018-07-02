import React from 'react';
import PropTypes from 'prop-types';

import {listingShape} from '../../propz/listingprop';
import './Listings.css';

import ListingItem from '../ListingItem/ListingItem';

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(listingShape),
    onListingSelection: PropTypes.func,
  };

  render () {
    const {listings, onListingSelection} = this.props;
    // const listings = this.props.listings; same as above
    const listingsItemComponents = listings.map((item, index) => {
      return (
        // <li key={item.id}>{item.price}</li>
        <ListingItem
          listing={item}
          index={index}
          key={item.id}
          onSelect={onListingSelection}
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
