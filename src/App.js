import React, { Component } from 'react';
import { observable, decorate } from 'mobx';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const Main = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 200px;
  padding: 15px;
  margin: 50px auto;
  text-align: left;
  box-shadow: 0 8px 19px -5px rgba(0, 0, 0, 0.11);
`;

const todoItems = [{
  index: 1,
  value: "Create todo",
  done: false
}, {
  index: 2,
  value: "Add tests",
  done: true
}, {
  index: 3,
  value: "have a rest",
  done: true
}];

class App extends Component {
  addItem = todoItem => {
    this.todoItems.unshift({
      index: todoItems.length+1,
      value: todoItem.newItemValue,
      done: false
    });
  }

  todoItems = todoItems;

  removeItem = itemIndex => {
    this.todoItems.splice(itemIndex, 1);
  }

  markTodoDone = itemIndex => {
    this.todoItems[itemIndex].done = !this.todoItems[itemIndex].done;
  }

  render() {
    return (
      <Main>
        <h1>Todo list</h1>
        <TodoList items={this.todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        <TodoForm addItem={this.addItem} />
      </Main>
    );
  }
}

export default decorate(App, {
  todoItems: observable
});
