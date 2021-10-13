import React, {useState} from "react";
import TodoTable from "./TodoTable";

function TodoList() {
    const [desc, setDesc] = useState(``);
    const [date, setDate] = useState(``);
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        setTodos([...todos, {"desc": desc, "date" : date}]);
        setDesc(``);
        setDate(``);
    }

    const deleteTodo = (row) => {
        setTodos(todos.filter((todo, index)=> index !== row));
    }

    return(
        <div>
            <h1>Simple Todolist</h1>
            <div className='todo'>Add todo:</div>
            <label>
                Date:   
                <input value={date} onChange={e => setDate(e.target.value)}/>
            </label>
            <label>
                Description:
                <input value={desc} onChange={e => setDesc(e.target.value)}/>
            </label>
            <button onClick={addTodo}>Add</button>
            <TodoTable todos = {todos} deleteTodo={deleteTodo}/>
        </div>
    );
}

export default TodoList;
