import React, { Component } from 'react';
import { observable, autorun } from 'mobx';

// https://cn.mobx.js.org/intro/concepts.html

let todoStore = observable({
  /* 观察的状态 */
  todos: [],
  list: [],

  /* 计算值 */
  get completedCount() {
    return this.todos.filter(todo => todo.completed).length;
  }
});

/* 观察状态改变的函数 */
autorun(function() {
  todoStore.list.push(
    `Completed
    ${todoStore.completedCount} of
    ${todoStore.todos.length} items`
  );
  // console.log(
  //   'Completed %d of %d items',
  //   todoStore.completedCount,
  //   todoStore.todos.length
  // );
});

/* ..以及一些改变状态的动作 */
todoStore.todos[0] = {
  title: 'Take a walk',
  completed: false
};
// -> 同步打印 'Completed 0 of 1 items'

todoStore.todos[0].completed = true;
// -> 同步打印 'Completed 1 of 1 items'
class Mobx12 extends Component {
  render() {
    return (
      <div>
      {
        todoStore.list.map((res, i) => {
          return <p key={i}>{ res }</p>;
        })
      }
      </div>
    );
  }
}

export default Mobx12;
