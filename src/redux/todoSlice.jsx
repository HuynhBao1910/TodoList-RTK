import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        list: [],
        filter: "all",
    },
    reducers: {
        addTodo: (state, action) => {
            state.list.push(action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.list.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            state.list = state.list.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const todo = state.list.find((todo) => todo.id === action.payload.id);
            if (todo) {
                todo.title = action.payload.title;;
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const {
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    setFilter,
} = todoSlice.actions;

export default todoSlice.reducer;