import React, { Component } from 'react'
import '../../stylesheets/Dropdown.css'

class Dropdown extends Component {
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
          className={`dropdown-header header-${isOpen ? 'active' : ''}`}
          id="dropdown"
          onClick={handleClick}
        >
          {activeItem}
          <i
            className="fas fa-sort-down"
            id="dropdown-arrow"
          />
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
