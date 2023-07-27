import React, { useState, useEffect } from "react";

const Info = () => {
    const[name, setName] = useState('');
    const[nickname, setNickname] = useState('');

    // 화면 렌더링시 실행할 코드를 콜백함수 형식으로 작성
    useEffect(() => {
        console.log("최초 렌더링 되었습니다.");
        console.log({name, nickname});

        // 화면 업데이트 직후가 아닌, 업데이트 직전에 호출할 내용은 리턴구문 내에 함수를 작성하면 됩니다.
        return () => {
            console.log('cleanup');
            console.log(nickname);
        }

    }, [nickname]);

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info;