export function HeaderReducer(state='',action){ 
  if (action.type === 'ALERT') {
    return action.message;
  }
  return state;
}