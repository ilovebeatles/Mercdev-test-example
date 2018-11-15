import React from 'react';
import { observer } from 'mobx-react';
import TodoListItem from '../TodoListItem';
import styled from 'styled-components';

const List = styled.ul`
  width: 200px;
  list-style: none;
  padding: 0;

  &>li:hover {
    background-color: #F5F5F5;
  }
`;

class TodoList extends React.Component {
  render () {
    return (
      <List className="list-group">
        {this.props.items.map((item, index) => (
          <TodoListItem
            key={index}
            item={item}
            index={index}
            removeItem={this.props.removeItem}
            markTodoDone={this.props.markTodoDone}
          />
        ))}
      </List>
    );
  }
}

export default observer(TodoList);