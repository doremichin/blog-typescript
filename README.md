Blog / typesciprt로 제작하기
===========================
React

Redux-Toolkit

Typescript

React-hook-form

Firebase

------------------------------------

Goal🎯

- Typescript의 사용법과 기초 공부하기


--------------------------------------


####타입스크립트는 다양한 기본 타입을 제공합니다.</br>
- 기본 타입 : 
Boolean, Number, String, Object, Array, Tuple, Enum, Any, Void, Null, Undefined, Never

```typescript
let str: string = 'hi';
let num: number = 100;
let arr: number[] = [1, 2, 3];
// let arr2 : Array<number> = [1,2,3]; 이 방식은 jsx 또는 tsx애서 충돌 날 수 있음
let arr3: (number | string)[] = [1, 2, 3, '4', '5'];
let arrNUm: number[] = [1, 2, 3];
let obj: object = {};
//타입으로 object를 넣는다는 것은 원시타입은 받지 않겠다는 것을 의미.
let obj2: { name: string, age: number} = {
 name: 'myeoni',
 age: 20
};
```

- 함수에 타입 설정

```typescript
function addNum(a: number, b: number): number {
return a+b;
}//인자 뒤에 ):number 는 리턴 값에 대한 타입

//옵셔널 처리
function log(a?: string, b?: number, c?: string) {
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
- Any: 모든 데이터 타입을 허용합니다.
  <br/><br/>
- Void: 변수에는 undefined와 null만 할당하고 함수에는 리턴 값을 설정할 수 없는 타입입니다.
<br/><br/>
- Never: 특정 값이 절대 발생할 수 없을 때 사용합니다.<br/><br/>

####인터페이스<br/>

```typescript
interface User {
    name : string;
    age : number;
    [index : string] : any; //인덱싱
}
//변수에 활용
const user : User = {
    name : 'gwang',
    age : 21,
    father : { name : 'young' , age : 33}
}
//함수에 활용
function getUser(user : User) {
    console.log(user)
}

//인덱싱
interface StringArray {
    [index:number] : string;
}

let array : StringArray = ['a','b','c']

interface Person {
    name : string;
    readonly gender : string;
}

const person : Person = {
    name : 'gwang',
    gender : 'male'
}
// person.gender = 'female'; // gender는 readonly이기 때문에 값을 변경할 수 없다.
```
###타입과 인터페이스 차이<br/>
```typescript
//함수 표현
type EatType = (food : string) => void;

interface IEat {
  (food : string) : void;
}
//배열 표현
type PersonList = string[];

interface IPersonList {
    [index : number] : string;
}
```
####intersection
```typescript
interface ErrorHandling {
    success : boolean;
    error? : {message : string};
}
interface ArtistsData {
    artists : {name : string}[];
}
type ArtistsResponseType = ArtistsData & ErrorHandling;
interface IArtistResponse extends ArtistsData, ErrorHandling {}

let art : ArtistsResponseType;
let iar : IArtistResponse;
```
####union types
```typescript
interface Bird {
    fly() : void;
    layEggs() : void;
}
interface Fish {
    swim() : void;
    layEggs() : void;
}
type PetType = Bird | Fish;
//유니온 타입은 인터페이스로 구현이 어려움
// interface IPet extends PetType {} - error
// class Pet implements PetType {} - error
```
####Declaration Merging - interface
```typescript
interface MergingInterface {
    a : string ;
}
interface MergingInterface {
    b : string ;
}
let mi : MergingInterface;
// mi.a, mi.b
//type같은 경우는 merging이 되지 않음
```












####제네릭<br/>

```typescript
function accomplish(goal: T):T {
 return goal;
}

accomplish<string>('success');
accomplish<number>(1000);
```
