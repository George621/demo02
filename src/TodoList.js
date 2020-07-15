import React from 'react';
import { connect } from 'react-redux'

const TodoList = (props) => {
  const renderList = (arr) => {
    return arr.map((item, index) => {
      return <li key={item + index}>{item}</li>
    })
  }

  let { list, inputValue, clickButton, inputChange } = props
  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={inputChange}
        />
        <button onClick={clickButton}>提交</button>
      </div>
      <ul>
        {renderList(list)}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const mapDispachToProps = (dispach) => {
  return {
    inputChange(e) {
      let action = {
        type: 'change_input',
        data: e.target.value
      }
      dispach(action)
    },
    clickButton() {
      let action = {
        type: 'add_todo',
      }
      dispach(action)
    }
  }
}

export default connect(mapStateToProps, mapDispachToProps)(TodoList);