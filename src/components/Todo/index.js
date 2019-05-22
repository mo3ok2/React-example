import React, {Component} from 'react';
import './style.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import {connect} from 'react-redux';
import {addTodo, deleteTodo, setActiveTodo} from '../../actions';
import PropTypes from "prop-types";

class Todo extends Component {
    state = {
        todoInputText: ""
    };

    addTodo = (id) => {
        const {addTodo} = this.props;
        const {todoInputText} = this.state;

        addTodo(todoInputText, id)
        this.setState({todoInputText: ""})
    };

    render() {
        const {todoInputText} = this.state;
        const {todoList = [], activeTodo, deleteTodo, setActiveTodo} = this.props;

        return (
            <Paper className='todo-wrapper'>
                <h2>{this.context.t("Items")}</h2>
                <div className='add-todo-block'>
                    <TextField
                        className='add-todo-input'
                        label={this.context.t("Type name here...")}
                        variant="outlined"
                        value={todoInputText}
                        onChange={(e) => this.setState({todoInputText: e.target.value})}
                        onKeyPress={(e) => e.key === 'Enter' && this.addTodo()}
                    />
                    <Button
                        className='add-todo-button'
                        variant="contained"
                        color="primary"
                        onClick={
                            this.addTodo
                        }>{this.context.t("Add new")}</Button>
                </div>
                <div className='todo-list'>
                    {todoList.map((item, index) => (
                        <div className='todo-list-item' key={index}>
                            <div
                                onClick={() => setActiveTodo(index)}
                                className={activeTodo === index ? ' active' : ''}
                            >
                                <div>{item.text} <Chip className='chip-count' color="primary"
                                                       label={todoList[index].comments.length}/></div>
                            </div>
                            <Button
                                variant="outlined"
                                color='secondary'
                                onClick={() => {
                                    setActiveTodo(0)
                                    deleteTodo(index)
                                }}
                            >
                                {this.context.t("Delete")}
                            </Button>
                        </div>
                    ))}
                </div>
                {todoList.length > 0 && <Divider/>}
            </Paper>
        )
            ;
    }
}

Todo.contextTypes = {
    t: PropTypes.func.isRequired
};

Todo.propTypes = {
    todoList: PropTypes.array,
    deleteTodo: PropTypes.func,
    addTodo: PropTypes.func
};

const mapStateToProps = (state) => {
    const {todos} = state;
    return {
        todoList: todos.todoList,
        activeTodo: todos.activeTodo
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => {
            dispatch(addTodo(text))
        },
        deleteTodo: (id) => {
            dispatch(deleteTodo(id))
        },
        setActiveTodo: (id) => {
            dispatch(setActiveTodo(id))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Todo);
