import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/todoSlice";
import { Form } from "react-bootstrap";

const FilterDropdown = () => {
    const dispatch = useDispatch();

    const handleFilterChange = (event) => {
        dispatch(setFilter(event.target.value));
    };

    return (
        <Form.Select
            className="form-select mb-3"
            onChange={handleFilterChange}
            defaultValue="all"
        >
            <option value="all">All</option>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
        </Form.Select>
    );
};

export default FilterDropdown;