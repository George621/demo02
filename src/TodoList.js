import React, { Component } from 'react';
import { connect } from 'react-redux'


class TodoList extends Component {


  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.inputValue}
            onChange={this.props.inputChange}
          />
          <button>提交</button>
        </div>
        <ul>
          <li>jspange</li>
        </ul>
      </div>
    );
  }
}
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}
const dispachToProps = (dispach) => {
  return {
    inputChange(e) {
      console.log(e.target.value)
      let action = {
        type: 'change_input',
        data: e.target.value
      }
      dispach(action)
    }
  }
}

export default connect(stateToProps, dispachToProps)(TodoList);
