import React from "react";
import { Button, Form } from "react-bootstrap";

const TodoItem = ({ todo, onToggleTodo, onDeleteTodo, onUpdateTodo }) => {
    const handleToggleTodo = () => {
        onToggleTodo && onToggleTodo(todo.id);
    };

    const handleDeleteTodo = () => {
        onDeleteTodo && onDeleteTodo(todo.id);
    };

    const handleUpdateTodo = () => {
        onUpdateTodo && onUpdateTodo(todo.id);
    };

    return (
        <div className="d-flex align-items-center mb-2">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggleTodo}
                className="me-2"
            />
            <span>{todo.title}</span>
            <Button variant="primary" onClick={handleUpdateTodo} className="mx-2">
                Update
            </Button>
            <Button variant="danger" onClick={handleDeleteTodo}>
                Delete
            </Button>
        </div>
    );
};

export default TodoItem;