import React from 'react';
import { connect } from 'dva';
import TodoList from "../components/Todos";

function Todos({ dispatch, todolist, text }) {
  function handleDelete(id){
    dispatch({
      type: 'todos/delete',
      payload: id
    })
  }
  function handleAdd(text){
    dispatch({
      type: 'todos/add',
      payload: text
    })
  }
  function handleChange(text){
    dispatch({
      type: 'todos/change',
      payload: text
    })
  }
  function handleUpdate(id){
    const name = window.prompt("new name:");
    dispatch({
      type: 'todos/update',
      payload: id, name
    })
  }
  return (
    <div>
      <h3>Todos</h3>
      <TodoList onDelete={handleDelete} onAdd={handleAdd} todolist={todolist} onChange={handleChange} text={text} onUpdate={handleUpdate}/>
    </div>
  );
}

Todos.propTypes = {
};

function mapStateToProps(state) {
  console.log(state);
  return {
    todolist: state.todos.todolist,
    text: state.todos.text
  };
}

export default connect(mapStateToProps)(Todos);