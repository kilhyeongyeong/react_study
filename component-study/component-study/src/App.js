import React from "react";
import MyComponent from "./components/study/MyComponent";
import YourComponent from "./components/study/YourComponent";
import Say from "./components/study/Say";
import ArrayChange from "./components/study/ArrayChange";
import EventPractice from "./components/eventhandling/EventPractice";
import IterationSample from "./components/iteration/IterationSample";
import IterationSample2 from "./components/iteration/IterationSample2";
import Counter from "./components/hooks/Counter";

function App() {
  return (
    <>
      {/* 1-3장 */}
      {/* properties 명은 자유롭게 지정가능
          다만 받는 쪽에서도 전달해줄 때 사용해준 명칭을 사용해 연결 가능 */}
      {/* <MyComponent name='리액트!' /> */}
      {/* <MyComponent>사이에 적은 내용</MyComponent> 
      <YourComponent country='ROK' />
      <Say msg='안녕하세요'/>
      <ArrayChange/> */}

      {/* 4장 */}
      {/* <EventPractice/> */}

      {/* 6장 */}
      {/* <IterationSample/> */}
      {/* <IterationSample2/> */}

      {/* 8장 */}
      <Counter/>
    </>
  );
}

export default App;
