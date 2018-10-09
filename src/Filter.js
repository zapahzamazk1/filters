import React, { Component } from "react";
import Check from "./Check";
import { toArray } from "./utils";

export default class Filter extends Component {
  state = {
    popupVisible: false
  };

  render() {
    const { popupVisible } = this.state;
    const { name } = this.props;
    return (
      <div>
        <span onClick={this.handleClick}>
          {name}
          {popupVisible && (
            <div
              style={{
                zIndex: "20",
                width: "200px",
                height: "200px",
                position: "absolute"
              }}
            >
              {this.getCheck()}
            </div>
          )}
        </span>
      </div>
    );
  }

  getCheck = () => {
    const { list, name, onChange, checked } = this.props;
    const { data } = list;
    return data.map(item => (
      <label key={Math.random()}>
        {item.name}
        <Check
          type={list.type}
          name={name}
          value={item.id}
          checked={checked.includes(item.id + "")}
          onChange={onChange}
        />
      </label>
    ));
  };
  handleClick = () => {
    if (!this.state.popupVisible) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      popupVisible: !prevState.popupVisible
    }));
  };

  handleOutsideClick = e => {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  };
}
