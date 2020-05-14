import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'


export class SearchTodo extends Component {
    change = (e) => {
        this.props.SearchTodo({ value: e.target.value })
        this.setState({ title: '' })
    }
    render() {
        return (
            <div className="select">
                <select id="todos" className="filter-todo" onChange={this.change}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="notCompleted">Not-Completed</option>
                </select>

            </div>
        )
    }
}

SearchTodo.propTypes = {
    SearchTodo: PropTypes.func.isRequired,
}



export default SearchTodo
