function Todo({ todo, handleComplete, handleDelete }) {
    const style = {
        color: todo.complete ? 'red' : 'black',
        textDecoration: todo.complete ? 'line-through' : 'none',
    };

    return (
        <div key={todo.id} style={style}>
            <input type="checkbox" onClick={() => handleComplete(todo.id)} />
            {todo.task}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
    );
}

export default Todo;
