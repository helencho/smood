import React, { Component } from 'react'
import '../../stylesheets/Dropdown.css'

class Dropdown extends Component {
  componentWillMount() {
    // mount parent node for handling outside click
  }

  componentWillUnmount() {
    // unmount parent node
  }

  renderItems() {
    const { handleClick, items } = this.props
    return items.map((item, index) => {
      return (
        <div
          className="dropdown-item"
          id={index}
          key={`dropdown-item-${index}`}
          onClick={handleClick}
        >
          {item}
        </div>
      )
    })
  }

  render() {
    const { activeIndex, isOpen, items, handleClick } = this.props
    const activeItem = items[activeIndex]

    return (
      <div className="dropdown-container">
        <div
          className="dropdown-header"
          onClick={handleClick}
        >
          {activeItem}
          <i className="fas fa-sort-down" />
        </div>
        <div
          className={`dropdown-items-container-${isOpen ? 'auto' : 'hidden'}`}
        >
          {this.renderItems()}
        </div>
      </div>
    )
  }
}

export default Dropdown
