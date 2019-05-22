const initialState = {
    activeTodo: 0,
    todoList: []
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state,
                {
                    todoList: [...state.todoList, {
                        text: action.text,
                        comments: []
                    }]
                });
        case 'DELETE_TODO':
            return Object.assign({}, state,
                {
                    todoList: state.todoList.filter(item => state.todoList.indexOf(item) !== action.id)
                });
        case 'ADD_COMMENT':
            return Object.assign({}, state, {
                    todoList: state.todoList.map(item => state.todoList.indexOf(item) === action.id ? Object.assign({}, item, {comments: [...item.comments, action.comment]}) : item)
                }
            );
        case 'SET_ACTIVE_TODO':
            return Object.assign({}, state, {activeTodo: action.id});
        default:
            return state
    }
};

export default todos;
