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

# [useEffect](https://github.com/kilhyeongyeong/react_study/tree/master/component-study/component-study/src/components/hooks/Info.js)

* 개념<br>
    리액트 컴포넌트가 렌더링 될 때마다 실행하고 싶은 코드를 설정하는 것

* 사용법<br>
    1. []안에 있는 요소가 변할 때 마다 처리 로직 실행
    ```
    useEffect(() => { 처리 로직 }, [요소])
    ```
    2. 최초 한 번만 처리로직 실행
    ```
    useEffect(() => {처리로직}, [])
    ```
    3. 모든 요소가 변화할 때 마다 처리로직 실행
    ```
    useEffect(() => {처리로직})
    ```
    4. 처리 로직이 실행 되기 전에 실행하고 싶은 로직 처리(return문 먼저 실행 된 후 처리로직 실행)<br>
    <b>`cleanup 함수`</b> 라도고 함
    ```
    useEffect(() => {
        처리 로직
        return ( 처리로직 실행 이전 처리 로직 );
    })
    ```

* 주의사항<br>
    단! return 구문은 ,[]안에 변화요소가 있을 경우 또는 전체 요소가 변경되는 소스에서만 사용가능

# [useMemo](https://github.com/kilhyeongyeong/react_study/tree/master/component-study/component-study/src/components/hooks/Average.js)

* 개념<br>
    렌더링 여부 상관 없이 지정한 값이 변화했을 경우에만 실행되며, 성능 최적화에 도움을 줌

* 사용법<br>
    ```
    // 전역함수로 평균을 구하는 함수(getAverage(list)) 존재
    // list 값이 변경될 때만 실행
    const avg = useMemo(() => getAverage(list), [list]);
    ```

* useEffect와 useMemo의 차이점
    * useEffect : 렌더링 시 실행
    * useMemo : 렌더링 상황이 아니어도 지정 상태변수에 변화 감지시 실행

# css
* css 관리 방법<br>
    <blockquote> 
    ./component/Abc/aaa.js<br>
    ./component/Abc/bbb.js
    </blockquote>
    1. js 폴더와 css 폴더 생성<br>
    2. aaa 폴더와 bbb 폴더를 생성하여 각각의 폴더 안에 js와 css 파일 생성

* css 네이밍 규칙<br>
    aaa.js에서만 사용할 것이라면 <b>`aaa-이름`</b> 형식 준수<br>
    aaa.js에만 import를 했더라도, 같은 폴더-다른 파일(bbb.js 그 외)에도 <b>모두 적용</b>이 되기 때문

* CSS 모듈<br>
    이게 모징
    파일명.module.css<br>
    전역 css 파일
