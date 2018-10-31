import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleOpenClose } from '../../actions/dropdown_actions'
import '../../stylesheets/Dropdown.css'

class Dropdown extends Component {
  handleSelect = (e) => {
    this.props.handleClick(e.target.id)
  }

  renderItems() {
    const { items } = this.props

    return items.map((item, index) => {
      return (
        <div
          className="dropdown-item"
          id={index}
          key={`dropdown-item-${index}`}
          onClick={this.handleSelect}
        >
          {item}
        </div>
      )
    })
  }

  render() {
    const { index, items, isOpen, className } = this.props

    const activeItem = items[index]

    return (
      <div className={`dropdown-container dropdown-container-${className}`}>
        <div
          className={`dropdown-header header-${isOpen ? 'active' : ''}`}
          id="dropdown"
          onClick={this.props.toggle}
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

const mapStateToProps = (state) => {
  return {
    isOpen: state.dropdown.isOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch(toggleOpenClose()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)
