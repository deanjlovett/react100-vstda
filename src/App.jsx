import React, { Component } from 'react';
import ViewTodo from './ViewTodo';
import NewTodo from  './NewTodo';

const INITIAL_STATE = {
  todos: []
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = INITIAL_STATE;
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  addTodo(message, priority, completed, id){
    let newTodo = {
      todoText: message,
      todoPriority: priority,
      completed,
      id,
      editing: false
    }
    this.state.todos.push(newTodo);
    this.setState({
      todos: this.state.todos
    });
  }

  deleteTodo(id){
    let todoList = [...this.state.todos];

    let index = todoList.findIndex( v => v.id == id );
    if( index != -1 )
      todoList.splice(index,1)[0];

    this.setState({ todos: todoList });
  }

  submitEdit(message, priority, id){
    let todoList = [...this.state.todos];

    let item = todoList.find( v => v.id == id );
    item.todoText = message;
    item.todoPriority = priority;
    item.editing = !item.editing;
    this.setState({ todos: todoList });
}

  toggleEdit(id){
    let todoList = [...this.state.todos];

    let item = todoList.find( v => v.id == id );
    item.editing = !item.editing;
    this.setState({ todos: todoList });
  }

  toggleCompleted(id){
    let todoList = [...this.state.todos];

    let item = todoList.find( v => v.id == id );
    item.completed = !item.completed;
    this.setState({ todos: todoList });
  }

  render() {
    return (
      <div className='container'>
      <h1 style={{color:'#ffffff'}}>Very Simple ToDo App</h1>
      <h3 style={{color:'#ffffff'}}>Track all of the things</h3>
        <div className='row'>
          <div className='col-md-4'>
            <NewTodo 
              addTodo={this.addTodo}
            />
          </div>
          <div className='col-md-8'>
            <ViewTodo 
              toggleCompleted={this.toggleCompleted}
              todos={this.state.todos}
              toggleEdit={this.toggleEdit}
              submitEdit={this.submitEdit} 
              deleteTodo={this.deleteTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
