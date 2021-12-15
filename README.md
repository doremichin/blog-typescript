##Blog / typesciprt로 제작하기

React

Redux-Toolkit

Typescript

------------------------------------

Goal🎯

- Typescript의 사용법과 기초 공부하기



--------------------------------------

기본 타입

####타입스크립트는 다양한 기본 타입을 제공합니다.</br>
- 기본 타입 : 
Boolean, Number, String, Object, Array, Tuple, Enum, Any, Void, Null, Undefined, Never

```typescript
let str: string = 'hi';
let num: number = 100;

let arr: Array = [1, 2, 3];
let arr2: number[] = [1, 2, 3];

let obj: object = {};
let obj2: { name: string, age: number} = {
 name: 'hoho',
 age: 22
};
```

- 함수에 타입 설정

```typescript
function add(a: number, b: number): number {
return a+b;
}//인자 뒤에 ):number 는 리턴 값에 대한 타입

//옵셔널 파라미터
function log(a: string, b?: string, c?: string) {
 console.log(a);
}
```

<br/>

####기본 타입 중 자바스크립트에 존재하지 않는 타입<br/>
- Tuple: 배열의 타입 순서와 배열 길이를 지정할 수 있는 타입입니다.
```typescript
var arr: [string, number] = ['aa', 100];
```

- Enum: Number 또는 String 값 집합에 고정된 이름을 부여할 수 있는 타입입니다. 값의 종류가 일정한 범위로 정해져 있는 경우에 유용합니다. 기본적으로 0부터 시작하며 값은 1씩 증가합니다.
- _같은 ‘종류’를 나타내는 여러 개의 숫자 혹은 문자열을 다뤄야 하는데, 각각 적당한 이름을 붙여서 코드의 가독성을 높이고 싶다면 enum을 사용하세요._
```typescript
enum Shoes {
 Nike = '나이키',
 Adidas= '아디다스'
}
//아직은 약간 모호한 개념..
```
- Any: 모든 데이터 타입을 허용합니다.<br/><br/>
- Void: 변수에는 undefined와 null만 할당하고 함수에는 리턴 값을 설정할 수 없는 타입입니다.<br/><br/>
- Never: 특정 값이 절대 발생할 수 없을 때 사용합니다.<br/><br/>


https://www.samsungsds.com/kr/insights/TypeScript.html 참고!
