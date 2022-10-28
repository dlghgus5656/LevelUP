// * 인터페이스 + 제네릭
// * 인터페이스에 제네릭을 더하는 방법에 대해 공부합니다. 아래의 두 코드는 같은 의미이다.
function logText5<T>(text: T): T {
  return text;
}
// #1
let str3: <T>(text: T) => T = logText5;
// #2
let str4: { <T>(text: T): T } = logText5;
// * 위와 같은 변형 방식으로 제네릭 인터페이스 코드를 작성합니다.

interface GenericLogTextFn {
  <T>(trext: T): T;
}
function logText6<T>(text: T): T {
  return text;
}
let myString: GenericLogTextFn = logText6; // Okay
myString(true);
myString(11);
myString("hi");

// * 위 코드에서 만약 인터페이스에 인자 타입을 강조하고 싶다면 아래와 같이 변경할 수 있습니다.

interface GenericLogTextFn2<T> {
  (text: T): T;
}
function logText7<T>(text: T): T {
  return text;
}
let myString2: GenericLogTextFn2<string> = logText7;
myString2("hi"); // ok
// myString2(11); // error: Argument of type 'number' is not assignable to parameter of type 'string'
