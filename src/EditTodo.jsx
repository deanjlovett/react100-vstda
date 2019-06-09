import React, { Component } from 'react';

class EditTodo extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
        todoPriority: this.props.todoPriority,
        todoText: this.props.todoText,          
        completed: this.props.completed   
    }
     console.log('EditTodo constructor:');
     console.log('  props TodoText:', this.props ); // name change
     console.log('  state TodoText:', this.state ); // name change
  }

  onChange(e){
    if(e.target.name == 'update-todo-text'){
      this.setState({
        todoText: e.target.value // name change
      });
    }
    if(e.target.name == 'update-todo-priority'){
      this.setState({
        todoPriority: e.target.value // name change
      });
    }
    if(e.target.name == 'update-todo-completed'){
      this.setState({
        completed: e.target.value
      });
    }
  }

  render(){
    return(
      <div className='card'>
        <div className='card-body'>
          <div className='form-group'>
            <label htmlFor='update-todo-text'>Description</label>
            <textarea onChange={this.onChange} className='update-todo-text' name='update-todo-text' value={this.state.todoText}></textarea>
            <label htmlFor='update-todo-priority'>Priority</label>
            <select 
              name='update-todo-priority'
              className='update-todo-priority' 
              onChange={this.onChange}
              value={this.state.todoPriority}
            >
              <option value='1'>Low Priority</option>
              <option value='2'>Medium Priority</option>
              <option value='3'>High Priority</option>
            </select>          
            <button className='update-todo btn btn-success pull-right'
              name='button'
              type='submit'
              onClick={() => this.props.submitEdit(this.state.todoText, this.state.todoPriority, this.props.id)}>Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditTodo;