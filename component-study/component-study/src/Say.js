import React, { useState } from "react";

let b = true;
const Say = (props) => {    // props 대신 {프로퍼티명1, 프로퍼티명2...} 으로 전달 가능
    // 아래 문법을 통해서, 변수값이 변경될 때 화면도 다시 렌더링(그려지게) 가능
    // const [관리할 변수명, set관리할변수명] = useState(초기값)
    const [msg, setMsg] = useState(props.msg);
    
    // 클릭하면 msg 변수에 든 값을 Hello로 바꿉니다.
    const onClickEvent = () => {
        if(b)
            setMsg("Hello~🥰"); // msg 변수의 값을 Hello로 변경하고 화면도 다시 그림
        else
            setMsg("하잉");
        b = !b;
    }

    return (
        // 이벤트 바인딩시에는 카멜케이스로 변형해서 합니다.
        // on이벤트명={위에서 선언한 함수}
        <div>
            <button onClick={onClickEvent} >변경</button>
            인사하겠습니다. {msg}🖐️
        </div>
    )
}

export default Say;