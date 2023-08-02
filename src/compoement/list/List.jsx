import React from 'react';
import './style.css';
import Todo from './todo/Todo';

function List({ todos, setTodos }) {
    const onCompleteHandler = selectedId => {
        setTodos(prevTodos =>
            prevTodos.map(todo => (todo.id === selectedId ? { ...todo, isDone: !todo.isDone } : todo)),
        );
    };
    const onDeleteHandler = selectedId => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== selectedId));
    };

    return (
        <div className="list_container">
            <h1>Working.. 🔥</h1>
            <div className="list_wrapper">
                {todos.map(todo =>
                    !todo.isDone ? (
                        <Todo
                            todo={todo}
                            key={todo.id}
                            setTodos={setTodos}
                            onDeleteHandler={onDeleteHandler}
                            onCompleteHandler={onCompleteHandler}
                        />
                    ) : null,
                )}
            </div>
            <h1>Done..! 🎉</h1>
            <div className="list_wrapper">
                {todos.map(todo =>
                    todo.isDone ? (
                        <Todo
                            todo={todo}
                            key={todo.id}
                            setTodos={setTodos}
                            onDeleteHandler={onDeleteHandler}
                            onCompleteHandler={onCompleteHandler}
                        />
                    ) : null,
                )}
            </div>
        </div>
    );
}

export default List;
