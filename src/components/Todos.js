import React from 'react';
import { Button, Input, Table, Divider } from 'antd';
import * as styles from './Todos.css';

const TodoList = ({ onDelete, onAdd, todolist, onChange, text, onUpdate }) => {
  const columns = [{
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (todo) => <div>
      <a onClick={()=>onUpdate(todo.id)}>Edit</a>
      <Divider type='vertical'/>
      <a onClick={()=>onDelete(todo.id)}>Delete</a>
    </div>
  },];
  return (
    <div>
      <div>
        <Input className={styles.inputText} onChange={(e)=>onChange(e.target.value)} value={text}/> &nbsp;
        <Button onClick={()=>onAdd(text)} icon='plus' type='primary'>添加</Button>
      </div>
      <Table columns={columns} dataSource={todolist}/>
    </div>
  );
};

TodoList.propTypes = {

};

export default TodoList;