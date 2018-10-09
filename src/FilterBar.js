import React, { Component } from "react";
import Filter from "./Filter";
import { data, toArray } from "./utils";

export default class FilterBar extends Component {
  render() {
    return <div>{this.getFilters()}</div>;
  }

  getFilters = () => {
    return Object.keys(data).map(key => (
      <div key={Math.random()}>
        <span>{data[key].name}</span>
        <Filter list={data[key]} name={key} />
      </div>
    ));
  };
}
