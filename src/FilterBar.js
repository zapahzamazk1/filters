import React, { Component } from "react";
import Filter from "./Filter";
import { data, toArray } from "./utils";

export default class FilterBar extends Component {
  state = {
    checkedItems: {
      photographer: [],
      customer: [],
      media_type: []
    }
  };
  render() {
    return <div>{this.getFilters()}</div>;
  }

  getFilters = () => {
    return Object.keys(data).map(key => (
      <div key={Math.random()}>
        <Filter
          list={data[key]}
          name={key}
          onChange={this.handleChange}
          checked={this.state.checkedItems[key]}
        />
      </div>
    ));
  };

  handleChange = (e, name) => {
    const { value, checked } = e.target;
    if (!checked) {
      this.setState(prevState => ({
        checkedItems: {
          ...prevState.checkedItems,
          [name]: prevState.checkedItems[name].filter(item => item !== value)
        }
      }));
      return;
    }
    this.setState(prevState => ({
      checkedItems: {
        ...prevState.checkedItems,
        [name]: [...prevState.checkedItems[name], ...value]
      }
    }));
  };
}
