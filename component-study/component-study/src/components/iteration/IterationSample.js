import React from "react";

const IterationSample = () => {
    const names = ['가', '나', '다', '라', '마', '바'];
    const nameList = names.map((name, index) => <li key={'name-' + index} >{name}</li>)

    console.log(nameList);

    return (
        <ul>
            {nameList}
        </ul>
    );
};

export default IterationSample;