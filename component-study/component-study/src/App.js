import React from "react";
import MyComponent from "./components/study/MyComponent";
import YourComponent from "./components/study/YourComponent";
import Say from "./components/study/Say";
import ArrayChange from "./components/study/ArrayChange";

function App() {
  return (
    <>
      {/* properties 명은 자유롭게 지정가능
          다만 받는 쪽에서도 전달해줄 때 사용해준 명칭을 사용해 연결 가능 */}
      {/* <MyComponent name='리액트!' /> */}
      <MyComponent>사이에 적은 내용</MyComponent> 

      <YourComponent country='ROK' />

      <Say msg='안녕하세요'/>

      <ArrayChange/>
    </>
  );
}

export default App;
