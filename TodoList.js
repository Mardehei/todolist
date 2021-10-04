import React, {useState} from "react";

function TodoList() {
    const [desc, setDesc] = useState(``);
    const [date, setDate] = useState(``);
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        setTodos([...todos, {"desc": desc, "date" : date}]);
        setDesc(``);
        setDate(``);
    }

    const mapTodo = todos.map((todo, index) => 
        <tr key = {index}>
            <td>{todo.date}</td>
            <td>{todo.desc}</td>
        </tr>
    )

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
            <table>
                <tbody>
                    <tr><th>Date</th><th>Description</th></tr>
                    {mapTodo}
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;