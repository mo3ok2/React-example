export const addTodo = text => ({
    type: 'ADD_TODO',
    text
});

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id: id,
});

export const addComment = (comment, activeTodo) => ({
    type: 'ADD_COMMENT',
    id: activeTodo,
    comment
});

export const setActiveTodo = id => ({
    type: 'SET_ACTIVE_TODO',
    id
});
