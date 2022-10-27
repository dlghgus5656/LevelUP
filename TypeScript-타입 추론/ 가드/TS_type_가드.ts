// * 타입 가드 (type guard)
// 함수의 파라미터로 유니온 타입이 지정되는 경우 타입이 2개 이상임으로 공통되는 속성만 사용이 가능합니다.
// 이럴 경우 각 타입을 분기 처리하여 타입별로 로직을 분리 하기 위한 작업입니다.

interface Dev {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}

function introduce(): Dev | Person {
  return { name: "d", age: 33, skill: "c" };
}

const tony = introduce(); // Dev | Person 으로 공통된 속성만 사용가능. 즉 tony.skill 불가

// skill을 빼고 싶다면? -> type assertion으로 사용 가능
if ((tony as Dev).skill) {
  console.log((tony as Dev).skill);
} else if ((tony as Person).age) {
  console.log((tony as Person).age);
}
// 너무 assertion을 많이 씀으로 타입 가드 함수를 만든다.

// 타입 가드 정의
// target is Dev -> 넘겨 받은 파라미터가 해당 타입인지를 확인
function isDev(target: Dev | Person): target is Dev {
  // skill 이 있다면 Dev이다.
  return (target as Dev).skill !== undefined;
}
if (isDev(tony)) {
  // name, skill 사용 가능
  console.log(tony.skill);
} else {
  // name, age 사용 가능
  console.log(tony.age);
}
