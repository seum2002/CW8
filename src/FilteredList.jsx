import React, { Component } from 'react';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      type: 'All' // Set your default value here
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  onTypeChange = (event) => {
    const selectedType = event.target.value;
    this.setState({
      type: selectedType
    });
  };

  filterItem = (item) => {
    const { search, type } = this.state;
    const itemNameIncludesSearch = item.name.toLowerCase().includes(search.toLowerCase());

    if (type === 'All') {
      return itemNameIncludesSearch;
    } else {
      return itemNameIncludesSearch && item.type === type;
    }
  };

  render() {
    return (
      <div className="filter-list">
        <select onChange={this.onTypeChange}>
          <option value="All">All</option>
          <option value="Fruit">Fruit</option>
          <option value="Vegetable">Vegetable</option>
        </select>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
