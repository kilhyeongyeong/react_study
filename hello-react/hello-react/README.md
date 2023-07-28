# 부모태그가 반드시 필요한 이유
다음과 같은 특성 때문에 부모태그가 반드시 필요합니다.
1. 실제로 JSX문법상 `return (HTML 소스)` -> `React.createElement(HTML 소스)`로 변경되어 실행됩니다. <br>
2. java와 javaScript는 리턴 값이 <b>한 개</b>여야 합니다.<br>
3. 태그 한 개당 문장 한 개로 취급합니다.

따라서 부모 태그로 묶지 않고 여러 태그를 사용할 경우 리턴값이 다수의 갯수로 인식하여 오류가 발생하게 됩니다.

### 예제
* return 갯수 = 1
```
    return (
        <div>
            <p>일</p>
            <p>이</p>
            <p>삼</p>
            <p>사</p>
        </div>
    );
```

* return 갯수 = 4 -> <span style="color.red"><b>오류발생!</b></span>
```
    return (
        <p>일</p>
        <p>이</p>
        <p>삼</p>
        <p>사</p>
    )
```