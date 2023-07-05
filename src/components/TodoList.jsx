import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    toggleTodo,
    deleteTodo,
    updateTodo,
} from "../redux/todoSlice";
import TodoItem from "./TodoItem";
import FilterDropdown from "./FilterDropdown";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Button } from "react-bootstrap";

const TodoList = () => {
    const todos = useSelector((state) => state.todos.list);
    const filter = useSelector((state) => state.todos.filter);
    const dispatch = useDispatch();
    const [updatingId, setUpdatingId] = useState(null);
    const [updatedText, setUpdatedText] = useState("");

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
        toast.success("Todo deleted successfully!", {
            position: toast.POSITION.TOP_CENTER,
        });
    };

    const handleUpdateTodo = (event) => {
        event.preventDefault();
        dispatch(updateTodo({ id: updatingId, title: updatedText }));
        setUpdatedText("");
        setUpdatingId(null);
        toast.success("Todo updated successfully!", {
            position: toast.POSITION.TOP_CENTER,
        });
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === "incomplete") {
            return !todo.completed;
        } else if (filter === "complete") {
            return todo.completed;
        } else {
            return true;
        }
    });

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Todo List</h2>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <FilterDropdown />
                    <ul className="list-group">
                        {filteredTodos.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                onToggleTodo={handleToggleTodo}
                                onDeleteTodo={handleDeleteTodo}
                                onUpdateTodo={() => setUpdatingId(todo.id)}
                            />
                        ))}
                    </ul>
                    {updatingId && (
                        <Form onSubmit={handleUpdateTodo}>
                            <Form.Group className="mb-3">
                                <Form.Label>Update Todo:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter updated todo"
                                    value={updatedText}
                                    onChange={(e) => setUpdatedText(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        </Form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TodoList;