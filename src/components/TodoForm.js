import React from 'react'

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state={
            task:''
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitTodo = e => {
        e.preventDefault();
        this.setState({  task:''});
        this.props.addTodo(e, this.state.task)        
    };

    render() {
        console.log('rendering form');
        return (
            <form onSubmit={this.submitItem}>
                <input
                    type="text"
                    value={this.state.item}
                    name="task"
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;