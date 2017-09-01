import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/items';

class Items extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div className="shopping-list__items" />
    );
  }
}

const mapStateToProps = state => ({
  items: state.items.items,
});

export default connect(mapStateToProps, { fetchItems })(Items);
