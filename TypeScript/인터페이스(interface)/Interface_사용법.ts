// * 인터페이스(Interface) - 타입 체크에 있어서 ts의 지향점은 타입 체크는 값의 형태에 기반하여 이루어져야 한다는 점입니다.
// * 이것을 ducktyping(덕타이핑)이라고 합니다.

// ? duck typing
// 만약 어떤 새가 오리처럼 걷고, 헤엄치고, 꽥꽥거린다면 그 새를 오리라고 부를 것이다. 덕 타이핑에서는 객체의 타입보다
// 객체가 사용되는 양상이 중요하다. 즉, 객체의 변수, 메소드의 집합으로 객체의 타입이 결정되는 것이다.
// 결국 하고자 하는 말은 타입스크립트는 현재 가지고 있는 메소드 및 값에 의해 타입 체크가 이루어져야 한다는 것이다.

// * 인터페이스의 장접 및 사용법
let person = { name: "Capt", age: 28 };

function logAge(obj: { age: number }) {
  console.log(obj.age); // 28
}
logAge(person); // 28
// * 위 처럼 함수의 param에 객체의 속성 타입을 정의 할 수 있습니다.

//
//* 그러나 인터페이스를 사용하면 함수의 인자가 좀 더 명시적으로 바뀝니다. 또한 같은 타입을 사용할 경우 재사용이 가능합니다.
// * 인터페이스를 사용할 때는, 함수내에 사용할 속성에 대해서만 인터페이스를 지정해줘도됩니다.
// * 또한 인터페이스 내의 속성 순서를 지키지 않아도 됩니다.
interface personAge {
  age: number;
}

function logAge2(obj: personAge) {
  console.log(obj.age);
}
let person2 = { name: "Capt", age: 28 };
logAge2(person);

// ? Optional 프로퍼티 - 인터페이스를 사용할 때 인터페이스 내에 정의한 속성 전부를 사용하지 않아도 됩니다.
// ? 이를 옵션 속성이라고 합니다. ? 를 이용하여 사용합니다.
interface TestType {
  test: string;
  test2?: number;
}

let testProp = {
  test: "tttt",
  // test2는 옵션 값임으로 있어도 되고, 없어도 됩니다.
};
function testFunc(param: TestType) {
  console.log(param.test); // tttt
}
testFunc(testProp);
