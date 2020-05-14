import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'


export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            backgroundColor: '#f4f4f4',
            marginTop: '5px',
            borderBottem: '1px #cc dotted',
            fontSize: '16px',
        }
    }
    delTodo = () => {
        console.log('yes')
    }
    render() {
        // console.log(this.props.todo);
        const { id, title } = this.props.todo
        return (

            <div style={this.getStyle()} >
                {/* <CSSTransitionGroup transitionName="removed-item">wqqw</CSSTransitionGroup> */}
                <p style={{ display: 'flex' }}>
                    <span style={{ flex: '10', padding: '10px', textAlign: 'left' }}>{title}</span>
                    <button onClick={this.props.markComplete.bind(this, id)} style={btnCheckStyle}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </p>
            </div>
        )
    }
}

//Prop Types

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
    background: '#ee7455',
    color: '#fff',
    border: 'none',
    padding: '10px 10px',
    cursor: 'pointer',

}
const btnCheckStyle = {
    background: '#79C27B',
    color: '#fff',
    border: 'none',
    padding: '10px 10px',
    cursor: 'pointer',
}




export default TodoItem
