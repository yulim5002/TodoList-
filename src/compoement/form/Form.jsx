import React, { useState, useRef } from 'react';
import './styled.css';
function Form({ todos, setTodos }) {
    const initialState = { id: 0, title: '', body: '', isDone: false };

    const [inputTodo, setInputTodo] = useState(initialState);
    const nextId = useRef(3);

    const onChangehandler = e => {
        const { name, value } = e.target;
        // 객체 비구조화 할당을 사용하여 이벤트 객체(e)의 target 프로퍼티에서 name과 value를 추출합니다. name은 변경된 입력 요소의 이름을 의미하고, value는 해당 입력 요소의 새로운 값입니다.
        //객체 비구조화 할당으로 인해 event.target.name과 event.target.value에서 value와 name을 추출해 사용할 수 있게 된다.
        setInputTodo({ ...inputTodo, [name]: value, id: nextId.current });
        // 'setInputTodo' 라는 함수를 호출하여 React 상태를 업데이트함으로, 새로운 상태를 설정
        nextId.current++; // 함수가 실행될때마다 아이디도 하나씩 같이 증가
    };
    const onSubmitHandler = e => {
        e.preventDefault();
        setTodos([...todos, inputTodo]); // inputTodo를 todos 배열에 추가하여 새로운 Todo 항목을 등록하고, inputTodo를 초기 상태로 설정하여 입력 상자를 비웁니다.
        setInputTodo(initialState); // input창을 빈칸으로!
    };

    return (
        <>
            <form onSubmit={onSubmitHandler} className="form_container">
                <div className="input_container">
                    <label>제목 : </label>
                    <input type="text" name="title" value={inputTodo.title} onChange={onChangehandler} required />
                    <label>내용 : </label>
                    <input type="text" name="body" value={inputTodo.body} onChange={onChangehandler} required />
                    {/* required -> 반드사 값을 입력해야 함을 의미 */}
                </div>
                <button>등록</button>
            </form>
        </>
    );
}

export default Form;
