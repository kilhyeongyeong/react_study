import React, { useState } from "react";

const YourComponent = (props) => {
    const [country, setCountry] = useState('ROK');

    const onClickEvent = () => {
        setCountry('KOREA');
    }

    return (
        <div>
            <button onClick={onClickEvent}>변경</button>
            나는 {country} 사람..🥰
        </div>
    );
}

export default YourComponent;