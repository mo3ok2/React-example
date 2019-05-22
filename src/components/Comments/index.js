import React, {Component} from 'react';
import './style.css'
import Paper from '@material-ui/core/Paper';
import avatar from '../../static/images/avatar.png'
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {addComment} from "../../actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class Comments extends Component {
    state = {
        comment: "",
    };

    render() {
        const {comment} = this.state;
        const {addComment, todoList, activeTodo} = this.props;

        return (
            <Paper className='comments-wrapper'>
                <h2>{this.context.t("Comments")} #2</h2>
                <div className='comments-block'>
                    {todoList.length > 0 && todoList[activeTodo] !== undefined && todoList[activeTodo].comments.map((item, index) =>
                        <span key={index}>
                            <div className='comments-item'>
                                <img className='comments-item-img' alt='avatar' src={avatar}/>
                                <p>{item}<span></span></p>
                            </div>
                            <Divider variant="middle"/>
                        </span>
                    )}
                </div>
                <div className='add-comment-block'>
                    <img src={avatar} alt='avatar'/>
                    <TextField
                        variant="outlined"
                        fullWidth={true}
                        multiline={true}
                        className='comment-area'
                        rows={3}
                        value={comment}
                        onChange={(e) => this.setState({comment: e.target.value})}
                    />
                </div>
                <div className='buttons-block'>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            addComment(comment, activeTodo);
                            this.setState({comment: ""})
                        }}
                    >
                        {this.context.t("Add new")}
                    </Button>
                </div>
            </Paper>
        );
    }
}

Comments.contextTypes = {
    t: PropTypes.func.isRequired
};

Comments.propTypes = {
    comments: PropTypes.array,
    addComment: PropTypes.func
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
        addComment: (comment, id) => {
            dispatch(addComment(comment, id))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Comments);
