import React from 'react';
import TodoItem from './TodoItem';

const ViewTodo = props => {
  return(
    <div className='card'>
      <div className='card-body'>
        <div className='card-title'>ToDos:</div>
        {
          props.todos.map(todo => {
          return(
            <TodoItem
              key={todo.id}
              id={todo.id}
              todoText={todo.todoText}
              todoPriority={todo.todoPriority}
              completed={todo.completed}
              deleteTodo={props.deleteTodo}
              submitEdit={props.submitEdit}
              editing={todo.editing}
              toggleEdit={props.toggleEdit}
              toggleCompleted={props.toggleCompleted}
              />
            );
          })
        }
      </div>
    </div>
  )
}

export default ViewTodo;