import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

const TodoItem = styled.div`
    ${props => props.done
        ? `color: red; text-decoration: line-through;`
        : `color: #61DAFB;`
    }
`;

class TodoListItem extends React.Component {
  onClickClose = () => {
    const index = parseInt(this.props.index);
    this.props.removeItem(index);
  }

  onChange = () => {
    const index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  }

  render() {
    return(
      <li className="list-group-item ">
        <TodoItem done={this.props.item.done}>
          <label>
            <input type="checkbox" checked={this.props.item.done} onChange={this.onChange} />
            {this.props.item.value}
          </label>
          <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
        </TodoItem>
      </li>
    );
  }
}

export default observer(TodoListItem);
