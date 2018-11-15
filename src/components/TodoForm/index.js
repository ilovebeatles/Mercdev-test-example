import React from 'react';
import { observer } from 'mobx-react';
import { observable, decorate } from 'mobx';

class TodoForm extends React.Component {
  inputValue = '';

  onSubmit = event => {
    event.preventDefault();

    if (this.inputValue) {
      this.props.addItem({ newItemValue: this.inputValue });
      this.refs.form.reset();
    }
  }

  onChange = ({ target: { value } }) => {
    this.inputValue = value;
  }

  render () {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input
          value={this.inputValue}
          onChange={this.onChange}
          type="text"
          placeholder="add a new todo..."
        />
        <button type="submit" className="btn btn-default">Add</button>
      </form>
    );
  }
}

export default observer(decorate(TodoForm, {
  inputValue: observable
}));