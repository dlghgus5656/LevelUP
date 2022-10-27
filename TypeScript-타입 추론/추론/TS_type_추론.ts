// * 타입 추론 - 타입스크립트가 해당 코드를 판단하는 기준에 대해 알아봅니다.

// * 기본
// 타입스크립트는 코드에서 변수를 선언하거나, 할당 할때 추론이 일어납니다.
let x = 3; // 선언함으로 x는 number라는 추론 일어남
// 또는 함수를 선언하고, 파라미터에 기본값을 넣으면 추론 일어납니다.

// 파라미터에 기본값을 선언함으로 b는 number라는 추론이 일어남
function test(b = 10) {
  return b;
}

// * 인터페이스 추론
interface DropDown<T> {
  value: T;
  title: string;
}

interface DetailedDropDown<K> extends DropDown<K> {
  des: string;
  tag: K;
  /** extends에 의해 아래 타입이 추가됨
   * value: K, title: string
   * */
}

// 인터페이스의 제네릭의 값에 따라 정의된 타입이 추론되는 상황
let shoppingItem: DropDown<string> = { value: "test", title: "test2" };
let detailedItem: DetailedDropDown<string> = {
  value: "test3",
  title: "test4",
  des: "test5",
  tag: "test6",
};

// * best common type 추론 방식
// 배열 안에 여러 타입이 정의된 경우 추론은 유니온 타입으로 정의됩니다.
const arr2 = [1, 2, true, "string"]; // (number | boolean | string) []
