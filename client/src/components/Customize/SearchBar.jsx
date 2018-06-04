import React, { Component } from 'react'

// Presentational 
class SearchBar extends Component {
    render() {
        const { value, placeholder, handleInput } = this.props

        return (
            <input type="text" value={value} placeholder={placeholder} onChange={handleInput} />
        )
    }
}

export default SearchBar 