import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export class AddTodo extends Component {
    state={
        title:''
    }

    onChange = (e)=>{
        this.setState({title: e.target.value})
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({title: ''})
    }
    render() {
        return (
        <div className="toDoForm">
         <form onSubmit={this.onSubmit} style={formStyle}>
             <p style={{backgroundColor:' #fff',padding:'5px', width: '100%'}}>
                <input 
                    className="toDoInputBox"
                    type = "text" 
                    name = "title" 
                    placeholder="Add Todo .."
                    value = {this.state.title}
                    onChange = {this.onChange}
                    required
                    >
                </input>
                <button 
                    type="submit" style={btnStyle}>
                    <FontAwesomeIcon icon={faPlus}    />
                </button>
             </p>
         </form>
         </div>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
} 


const formStyle = {
    display: 'flex'
  }
  
  const btnStyle ={
    background : '#ee7455',
    color : '#fff',
    border : 'none',
    padding : '5px 5px',
    margin : '5px',
    cursor : 'pointer',
    float:'right'
    
}
export default AddTodo
