import React, { memo } from 'react';

const HabitForm = memo(props => {
    const inputRef = React.createRef();
    const formRef = React.createRef();
    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    }
    console.log('HabitForm');
    return (
        <form className="add-form" ref={formRef} onSubmit={onSubmit}>
            <input
                type="text"
                ref={inputRef}
                className="add-input" />
            <button className="add-button">Add</button>
        </form>
    );
});
export default HabitForm;

