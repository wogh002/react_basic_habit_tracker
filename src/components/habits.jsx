import React, { Component } from 'react';
import Habit from './habit';
import HabitForm from './habitForm';
class Habits extends Component {
    // 데이터(state)를 가지고 있는 곳에서 계산을 하고 지지고 볶고 하자.
    handleIncrement = habit => {
        this.props.onIncrement(habit);
    }
    handleDecrement = habit => {
        this.props.onDecrement(habit);
    }
    handleDelete = habit => {
        this.props.onDelete(habit);
    }
    handleAdd = name => {
        this.props.onAdd(name);
    }
    render() {
        console.log('habits');
        return (
            <>
                <HabitForm
                    onAdd={this.handleAdd}
                />
                <ul>
                    {
                        this.props.habits.map(habit => {
                            return <Habit
                                habit={habit}
                                key={habit.id}
                                onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                                onDelete={this.handleDelete}
                            />
                        })
                    }
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </>

        )

    }
}

export default Habits;