import { useState } from 'react';
import Todo from './Todo';

function App() {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const handleClick = () => {
        if (task) {
            setTodos((prev) => [
                ...prev,
                {
                    id: Date.now(),
                    task: task,
                    complete: false,
                },
            ]);
            setTask('');
        }
    };

    const handleComplete = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            })
        );
    };

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="App">
            <input
                type="text"
                placeholder="New Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleClick}>Add</button>
            <div>
                {todos.map((todo) => (
                    <Todo
                        todo={todo}
                        handleComplete={handleComplete}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
