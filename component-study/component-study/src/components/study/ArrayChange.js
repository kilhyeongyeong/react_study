import React, { useState } from "react";

const ArrayChange = () => {
    // 사람 이름과 성적 key-value 쌍으로 집어넣는 객체 초기값으로 넣기
    const [humans, setHumans] = useState({kim:100, lee:200});
    console.log(humans)

    const addScoreEvent = () => {
        // hamans.park = 300; // 이건 적용 안됨..!

        // 기본 humans내부요소 + park:300추가
        setHumans({...humans, park:300, kim:1000})
    }

    return (
        <>
            <button onClick={addScoreEvent}>성적추가하기</button>
            성적 목록 : {humans.kim}
        </>
    );
}

export default ArrayChange;