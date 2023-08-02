import React, { useState } from 'react';
import Header from '../compoement/header/Header';
import Layout from '../compoement/layout/Layout';
import Form from '../compoement/form/Form';
import List from '../compoement/list/List';
function TodoList() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: '리액트 공부하기',
            body: '오늘 배운 내용 복습',
            isDone: false,
        },
        {
            id: 2,
            title: 'Todo-List 페이지 만들기',
            body: '웹 페이지 구현 연습',
            isDone: false,
        },
    ]);
    return (
        <Layout>
            <Header />
            <Form todos={todos} setTodos={setTodos} />
            <List todos={todos} setTodos={setTodos} />
        </Layout>
    );
}

export default TodoList;
