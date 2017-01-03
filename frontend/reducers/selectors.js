
export const allTodos = (state) => {
  let id_array = [];
  for(let key in state.todos){
    id_array.push(state.todos[key]);
  }
  // let id_array = Object.keys(state.todos);
  // let todos = id_array.map((id) => (state.todos[id]));
  // console.log(todos);
  // return todos;
  return id_array;
};
