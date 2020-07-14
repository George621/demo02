
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
    //   break;
  
    default:
      return state
      break;
  }
}