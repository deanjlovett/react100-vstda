import React, { Component } from 'react';

class NewTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoText: '',
      todoPriority: '1',
      completed: false,
      id: 0
    }
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick(){
  let newid = this.state.id + 1;
  this.setState({id: newid});
  this.props.addTodo(
    this.state.todoText,
    this.state.todoPriority,
    this.state.completed,
    this.state.id);
  }

  onChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;
    if(name == 'create-todo-priority'){
      this.setState({
        todoPriority: value
      })
    }
    if(name == 'create-todo-text'){
      this.setState({
        todoText: value
      })
    }
  }

  render(){
    return(
      <div className='card'>
        <div className='card-body'>
          <div className='card-title'>Add a new Todo</div>
          <div className='form-group'>
            <label htmlFor='create-todo-text'>I want to...</label>
            <textarea 
              onChange={this.onChange} 
              className='create-todo-text' 
              name='create-todo-text'></textarea>
            <label 
              htmlFor='create-todo-priority' 
              style={{paddingRight: '5px'}}
              >How much of a priority is this? </label>
            <select 
              value={this.state.createTodoPriority}
              name='create-todo-priority'
              className='create-todo-priority' 
              onChange={this.onChange}
              value={this.state.todoPriority}
            >
              <option value='1'>Low</option>
              <option value='2'>Medium</option>
              <option value='3'>High</option>
            </select>          
            <button className='create-todo btn btn-success btn-block'
              name='button'
              type='submit'
              onClick={this.onClick}>Add It
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default NewTodo;
