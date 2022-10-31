// * 읽기 전용 속성
// * 읽기 전용 속성은 객체를 처음 생성할 때만 값을 할당하며, 그 이후로는 값이 바꿀수 없는 속성을 의미 합니다.
// * readonly 속성을 앞에 붙입니다.
interface ReadOnly {
  readonly test: string;
}
// * readonly로 선언하고 수정한다면 오류가 납니다.
let params: ReadOnly = {
  test: "test3",
};
// params.test = "test4" // error: Cannot assign to 'test' because it is a read-only property.

// * 읽기 전용 배열
// * 베열을 선언할 때 ReadonlyArray<T> 타입을 이용하면 읽기 전용 배열을 생성할 수 있습니다.
// * 배열을 아래와 같이 선언하면 배열 내부의 값들을 변경할 수 없다. 선언 하는 시점에서만 값을 핸들링 가능하다.
let arr3: ReadonlyArray<number> = [1, 2, 3];
// arr3.splice(0, 1); // error
// arr3.push(4); // error
// arr3[0] = 100; // error
// arr3 = [10, 20, 30]; // error

// * 인터페이스에 정의되지 않은 속성 사용
// * 만약 객체의 값으로 어떤 값이 들어올지 예상이 안되는 경우 interface를 정의할 수 없습니다.
// * 그럴땐 지정한 타입으로 되있는 값은 무조건 받아주는 방법이 있습니다. 아래와 같이 사용합니다.
interface test {
  [key: string]: number;
}
const test5: test = { anyone: 33, add: 22 };
