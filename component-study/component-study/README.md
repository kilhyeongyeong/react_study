# [useState](https://github.com/kilhyeongyeong/react_study/blob/master/component-study/component-study/src/components/study/ArrayChange.js)

* 개념<br>
    Event 발생시 해당 파일에 포함되는 화면만 다시 그림

* 사용법<br>
    ```
    const [관리할 변수명, set관리할변수명] = useState(초기값)
    const onClickEvent = () => { set관리할변수명(바뀔 값) }  // 함수명은 고정 아님X
    return (
        <div>
            <button onClick={onClickEvent} >변경</button>
            인사하겠습니다. {관리할 변수명}🖐️
        </div>
    )
    ```

* state 사용시 주의 사항<br>
    객체에 요소추가시 <b>`객체명.추가할키 = 추가할값`</b> 이면 추가되지만 useState 사용시에는 <b>적용되지 않음</b><br>
    따라서 깊은 복사를 이용하여 추가<br>
    ```
    const humans = {kim:100, lee:200};
    // park은 새로 추가!, kim은 이미 있는 키 값이므로 1000으로 변경됨!
    const humans2 = {...humans, park:300, kim:1000}; 
    ```
<br>

# [이벤트 바인딩](https://github.com/kilhyeongyeong/react_study/blob/master/component-study/component-study/src/components/eventhandling/EventPractice.js)

* 개념<br>
    컴포넌트에 Event 설정

* 사용법<br>
    1. 외부에 선언한 후 바인딩
    ```
    const Evnet명 = () => {
        이벤트 처리 로직
    }

    return (
        <button onClick={Event명}></button>
    );
    ```

    2. 인라인 바인딩(화살표 함수 사용)
    ```
    return (
        <button onClick={() => {
            이벤트 처리 로직
        }}>버튼</button>
    )
    ```