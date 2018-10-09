import React, { Component } from "react";
import Check from "./Check";
import { toArray } from "./utils";

export default class Filter extends Component {
  state = {
    isOpen: true,
    checkedItems: new Map()
  };
  render() {
    const { isOpen } = this.state;
    return <div>{isOpen && <div>{this.getCheck()}</div>}</div>;
  }

  handleChange = e => {
    const item = e.target.value;
    const isChecked = e.target.checked;

    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }));
  };

  getCheck = () => {
    const { list, name } = this.props;
    const { data } = list;
    console.log(list);
    return data.map(item => (
      <label key={Math.random()}>
        {item.name ? item.name : `${item.width}x${item.height}`}
        <Check
          type={list.type}
          name={item.name}
          value={item.id ? item.id : { width: item.width, height: item.height }}
          checked={this.state.checkedItems.get(item.name)}
          onChange={this.handleChange}
        />
      </label>
    ));
  };
}
