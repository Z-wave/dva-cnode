export default {
    namespace: 'todos',
    state: {
      todolist: [
        { name:"Learn dva", id: 1 },
        { name:"Learn redux", id: 2 }
      ],
      text:"",
    },
    reducers: {
      delete(state, { payload: id }) {
        return {
          ...state,
          todolist: state.todolist.filter(item=>item.id!==id),
        };
      },
      add(state, { payload: text }) {
        return {
          ...state,
          todolist:state.todolist.concat({
            name:text, id:Date.now()
          }),
        }
      },
      change(state, { payload: text }) {
        return {
          ...state,
          text: text,
        }
      },
      update(state, { payload: id, name }) {
        let new_list=[];
        Object.assign(new_list, state.todolist);
        const index = new_list.findIndex(item => item.id === id);
        new_list.splice(index, 1, {name, id});
        return {
          ...state,
          todolist: new_list
        };
      }
    },
  }