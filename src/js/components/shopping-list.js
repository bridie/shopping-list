import React, { Component } from 'react';
import Items from './../containers/items';

class ShoppingList extends Component {
  render() {
    return (
      <div className="shopping-list">
        <Items />
      </div>
    );
  }
}

export default ShoppingList;
