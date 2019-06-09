import React, { Component } from 'react';
import EditTodo from './EditTodo';

class TodoItem extends Component{
  constructor(props){
    super(props);
    this.state = {
        todoText: this.props.todoText,
        todoPriority: this.props.todoPriority,
        completed: this.props.completed,
    }
    this.priorityColors = this.priorityColors.bind(this);
  }

  priorityColors(priority){
    let color;
    switch(priority){
      case '1':
        color = 'success';
        break;
      case '2':
        color = 'warning';
        break;
      case '3':
        color = 'danger';
        break;
      default:
        console.log('something is rotten in Denmark.\nOh by-the-way: something is wrong in priorityColors in TodoItem.jsx');
    }
    return color;
  }

  render() {
    let thisTodo;
    if(this.props.editing == true){
      thisTodo = (
        <div>
          <EditTodo 
            todoText={this.props.todoText}
            todoPriority={this.props.todoPriority}
            id={this.props.id}
            submitEdit={this.props.submitEdit}
          />
        </div>)
    }
    else thisTodo = (
        <li className={`list-group-item-${this.priorityColors(this.props.todoPriority)}`}>
          <label htmlFor='completed-todo' style={{paddingRight: '5px'}}>Done?</label>
          <input 
            type='checkbox' 
            className='completed-todo update-todo-completed'
            checked={this.props.completed}
            onClick={() => this.props.toggleCompleted(this.props.id)}
          ></input>
          <text>{this.props.todoText}</text>
          <button 
            style={{height: '24px'}}
            className='delete-todo btn btn-danger pull-right' 
            onClick={() => this.props.deleteTodo(this.props.id)}>
            <i className='fa fa-trash' style={{height: '100%'}}>Delete</i>
          </button>
          <button 
            style={{height: '24px'}}
            onClick={() => this.props.toggleEdit(this.props.id)}
            className='edit-todo btn btn-info pull-right'>
            <i className='fa fa-edit' style={{height: '100%'}}>Edit</i>
          </button>
        </li>
        )
    return(thisTodo);
  }
}

export default TodoItem;
