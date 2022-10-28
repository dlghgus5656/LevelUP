// Void - 변수에는 undefined, null만 할당이 가능하고, 함수에는 return 값이 없을 때, 설정하는 타입이다.
const unuseData: void = undefined;

function notReturnValue(): void {
  console.log(1);
}

// * never
// 해당 함수의 맨 마지막까지 도달하지 않는다는 타입
// 절대로 발생하지 않는 값으로 에러 핸들링 함수에서 사용한다.
// 주로 함수의 리턴 타입으로 에러가 발생할 경우 에러를 무시하고 계속 진행시키는 역할을 합니다.
// 또는 대체 불가한 값을 만들 때 사요안다. - 재할당 불가

// 이 함수는 절대 함수의 끝까지 실행되지 않는다는 의미
function neverEnd(): never {
  while (true) {
    console.log(1);
  }
  // 여기에는 도달하지 않아요
}

function errorThrow(): never {
  // 에러가 발생한 경우 중지하지 않고 throw 함수 실행
  throw new Error("error");
}

// * union - union 타입은 하나의 변수에 여러 타입을 지정할 수 있습니다. 여러 타입을 지정하고 싶은 경우 | 를 사용합니다.
let value: string | number = "foo";
value = 100; // ok
value = "bar"; // ok
//value = true; // error

// * union 인터셉션 - | 는 or 이라면 & 는 and 입니다.
interface Test {
  name: string;
  skill: string;
}
interface Test2 {
  name: string;
  age: string;
}

function ask(someone: Test | Test2) {
  console.log(someone.name); // interface의 공통 속성으로 접근 가능
  // someone.skill, age는 공통속성이 아니므로 접근 불가능

  // 접근하고 싶다면 타입 가드로, 하나의 타입만 필터링 한 경우만 활용 가능
}

// &를 이용하면 3개의 속성 활용 가능 (인터섹션)
function ask2(someone: Test & Test2) {
  // Test와 Test2 두개의 interface를 포함하게 타입 정의
  console.log(someone.name);
  console.log(someone.skill);
  console.log(someone.age);
} // | 를 사용하면 함수 호출시 두개의 인터페이스 중 1개만 보장해주면 되나,
// &를 쓰면 함수 호출시 두개의 인터페이스 타입을 다 보장해줘야하므로 | 를 좀 더 많이 사용한다.

// * union 타입 가드 - 여러 타입을 사용하면 해당 값의 타입에 따라 분기 처리할 떄가 있습니다. 이럴 경우 각 타입에 따라 조건문을 만들어 주시면 됩니다.
function unionIter(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }
  return value;
}
