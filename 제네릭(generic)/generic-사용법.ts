// * 제네릭이란?
// * 재사용성 높은 컴포넌트를 만들 때 사용되며, 한가지 타입보다 여러 타입에서 동작하는 컴포넌트를 생성하는데 사용합니다.

// * 제네릭 안쓰고 여러 타입을 받는법 / 왜 제네릭을 써야하는가
// 제네릭을 사용하지 않고 any 타입을 사용하면 여러 타입을 넣을 수 있습니다.
function logText(text: any): any {
  console.log(text);
  return text;
}
logText(10);
logText(true);
logText("hi~");

// * 그러나 any 사용할 경우 함수의 인자로 어떤 타입이 들어갔으며, 어떤 타입을 반환해야하는지 알 수 없습니다.
// * any는 타입 체크를 하지 않기 때문이죠. 타입 체크를 하지 않으면 관련 메소드가 힌트로 나오지 않습니다.
// * 타입스크립트의 가장 좋은 장점인 컴파일단에서 버그를 걸러주는 역할을 하지 않는 소리입니다.
// ! 그렇기 때문에 any를 사용하지 않고, 제네릭을 사용함으로 위 문제를 모두 커버할 수 있습니다.

// ? 사용법 - 제네릭은 함수의 파라미터를 넣는 것과 같이 사용합니다.

// 1. 어떤 타입을 받을 건지 먼저 정의 (logText<T>)
// 2. params 타입으로 정의 ( text: T )
function logText2<T>(text: T): T {
  console.log(text);
  return text;
}
// 3. 함수를 호출할때 타입 정의
const str2 = logText2<string>("a");
str.split("");

logText2<boolean>(true); // type: boolean
logText2<string>("hi");
logText2<number>(10);
// * 위 코드는 text라는 파라미터에 값을 넘겨 text를 리턴합이다. text에 어떤 값을 넣더라도 들어간 값에 대한 타입을 반환합니다.
// * logText2 함수에는 넘기고자 하는 인자가 들어가고 그 인자에 대한 타입을 지정하면서 호출합니다.
logText2<number>(10);
// * 제네릭으로 넣어준 T는 인자로 받은 number 타입을 받아 number 타입으로 바뀌게 됩니다.
// * 동일하게 logText2함수에 다른 타입을 지정하면 제네릭은 다르게 지정한 타입으로 바뀌게 됩니다.
