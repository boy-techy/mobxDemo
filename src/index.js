import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";
import TodoModel from "./models/TodoModel";
import MobxDemo from "./tetsingCompononents";
import UserListStore from "./UserProfile/UserList.store";
import UsersList from "./UserProfile/UsersList";


const store = new TodoListModel();
const userStore = new UserListStore();

render(
  <div>
    <DevTools />
    {/*<TodoList store={store} />*/}
      <MobxDemo />
      <UsersList store={userStore}/>
  </div>,
  document.getElementById("root")
);

store.addTodo("Get Coffee");
store.addTodo("Write simpler code");
store.todos[0].finished = true;

setTimeout(() => {
  store.addTodo("Get a cookie as well");
}, 2000);

// playing around in the console
window.store = store;
