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

# [map](https://github.com/kilhyeongyeong/react_study/blob/master/component-study/component-study/src/components/iteration/IterationSample.js)

* 개념<br>
    반복문(순차적으로 파라미터로 넣어줌)

* 사용법
    ```
    const list = [1,2,3,4];
    list.map((item, index) => {console.log(item + ", " + index)})
    // 결과
    // 1, 0
    // 2, 1
    // 3, 2
    // 4, 3
    ```

* <b>Warning</b><br>
    만약 li태그를 사용할 경우 key값 설정이 필요. 그렇지 않을 경우 다음과 같은 warning 출력<br>
    ![in_map_notinclude_key_warning](https://github.com/kilhyeongyeong/react_study/blob/master/component-study/component-study/src/image/not_include_key_warning.png "warning")<br>

# [filter](https://github.com/kilhyeongyeong/react_study/blob/master/component-study/component-study/src/components/iteration/IterationSample2.js)

* 개념<br>
    조건의 결과값이 True인 값들만 반환

* 사용법
    ```
    const list = [1, 3, 5, 7, 9];
    list.filter(item => item > 5);
    // 결과
    // [7, 9]
    ```

# [hook](https://github.com/kilhyeongyeong/react_study/tree/master/component-study/component-study/src/components/hooks)

* 개념<br>
    useState, useEffect, 그 외 use를 포함한 다양한 함수들을 포함한 라이브러리

* 주의사항<br>
    반복문, 조건문, 중첩 함수 등 안에서 사용 금지(실행 순서가 꼬일 수 있음)

# [useEffect]()

* 개념<br>
    리액트 컴포넌트가 렌더링 될 때마다 실행하고 싶은 코드를 설정하는 것