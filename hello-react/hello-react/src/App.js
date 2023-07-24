import React from 'react';
import './App.css'

function App() {
  const name = "이ㅣ응";
  const divStyle = {
    // -가 들어가는 요소는 카멜케이스로 변환됩니다.
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : '48px',
    fontWeight : 'bold',
    padding: 16
  }
  return (
    // React.createElement("div", null, "Hello React")
    // 프레그 먼트
    <div style={divStyle}>
      { name === '이응' ? 
        <h1>리액트 작성은</h1> :
        <h1>이응 아니이임</h1>
      }
      <h2>반드시 하나의 부모태그가 있어야 합니다.</h2>
      <h3 className='abc'>{name}</h3>
      <br/>
      <input type='text' name='aaa' value={'bbb'}/>
      {/** 
       * 주석
       * 
      */}
    </div>
  );
}

export default App;
