import React, { useState } from "react";

const IterationSample2 = () => {

    const [names, setNames] = useState([
        {id:1, text:"눈사람"},
        {id:2, text:"얼음"},
        {id:3, text:'눈'},
        {id:4, text:'바람'}
    ])

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onDoubleClickEvent = (id) => {
        // alert('해당요소를 삭제합니다.');
        const ret = window.confirm("해당 요소를 삭제 하시겠습니까?");
        if(!ret) return;
        // 더블클릭한 번호가 아닌 자바스크립트 객체들만 리스트에 남긴채 저장
        setNames(names.filter(name => name.id != id));
    }
    
    const onChangeEvent = (e) => {
        setInputText(e.target.value);
    }

    const onClickEvent = (e) => {
        setNames([...names, {id:nextId, text:inputText}])
        setNextId(Number(nextId) + 1);
        setInputText('');
        }

    const namesList = names.map(name =>
        <li key={name.id} onDoubleClick={() => onDoubleClickEvent(name.id)}>
            {name.text}
        </li>
        );

    return (
        <>
            <input type="text" name="name" value={inputText} onChange={onChangeEvent}/>
            <button onClick={onClickEvent}>목록에 추가</button>

            <ul>{namesList}</ul>
        </>
        
    );
}

export default IterationSample2