
const initState = {
  inputValue: '222',
  list: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'change_input':
      let newValue = JSON.parse(JSON.stringify(state))
      return {
        ...newValue,
        inputValue: action.data
      }
    
    case 'add_todo':
      let newValueObj = JSON.parse(JSON.stringify(state))
      newValueObj.list.push(newValueObj.inputValue)
      newValueObj.inputValue =''
      console.log(newValueObj)
      return newValueObj
    default:
      return state
  }
}