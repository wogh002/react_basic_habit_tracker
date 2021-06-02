import './app.css';
import Habits from './components/habits';
import NavBar from './components/navBar';

// jsx 는 js코드이다.
//바벨이 다 알아서 변환해준다.
//js코드로 html 코드 작성
import React, { Component } from 'react';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ]
  }
  handleIncrement = habit => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++; //  habits[index].count = habits[index].count+ 1;
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return {
          ...habit,
          count: habit.count + 1
        }
      }
      return item;
    })
    this.setState({ habits });
  }
  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count }
      }
      return item;
    })
    this.setState({ habits });
  }
  handleDelete = habit => {
    const habits = this.state.habits.filter(item => {
      return item.id !== habit.id
    })
    this.setState({ habits });
  }
  handleAdd = name => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  }
  handleReset = () => {
    const habits = this.state.habits.map(item => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    })
    this.setState({ habits });
  }
  render() {
    console.log('app');
    return (
      <>
        <NavBar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits
          onAdd={this.handleAdd}
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
