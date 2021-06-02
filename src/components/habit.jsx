import React, { PureComponent } from 'react';
class Habit extends PureComponent {
    componentDidMount() {
        //컴포넌트가 돔요소에 출력 후 자동으로 메소드호출.
        console.log(`habit : ${this.props.habit.name} mounted`);
    }
    componentWillUnmount() {
        // / 컴포넌트가 마운트 해제되어 제거되기 직전에 호출됩니다. 
        console.log(`habit:${this.props.habit.name} willunmount`);
    }
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    }
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    }
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }
    render() {
        const { name, count } = this.props.habit;
        console.log('habit');
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;