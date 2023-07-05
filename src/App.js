import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Container>
      <Provider store={store}>
        <Row className="justify-content-center mt-4 mb-2">
          <Col xs={12} md={8} lg={6}>
            <h1 className="text-center">Todo List</h1>
          </Col>
        </Row>
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={8} lg={6}>
            <AddTodoForm />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <TodoList />
          </Col>
        </Row>
      </Provider>
      <ToastContainer />
    </Container>
  );
};

export default App;