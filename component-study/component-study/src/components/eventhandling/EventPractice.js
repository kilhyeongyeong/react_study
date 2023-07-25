import React, { useState } from "react";

const EventPractice = () => {
    // 124페이지 클래스형 컴포넌트로 진행되는 내용을 함수형 컴포넌트로 재구성
    const [message, setMassage] = useState('');
    const [username, setUsername] = useState('');

    function handleClick() {
        alert(username + " : " + message);
        setMassage('');  // 제출버튼 누르면 폼 비우기
        setUsername('');
    }

    const handleChange = (e) => {
        console.log(e);
        if(e.target.name == "username") setUsername(e.target.value);
        else setMassage(e.target.value);
    }

    return (
        <>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="이름"
                value={username}
                onChange={handleChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력"
                value={message}
                onChange={handleChange}
            />
            <button onClick={handleClick}>확인</button>
        </>
    );
}

export default EventPractice;