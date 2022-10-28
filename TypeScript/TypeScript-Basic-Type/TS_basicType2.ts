// * Array - 배열
// string만 받는 배열
const onlyString: string[] = ["a", "b"];
// 제네릭
const onlyString2: Array<string> = ["a", "b"];

// number만 받는 배열
const onlyNumber: number[] = [1, 2];
// 제네릭
const onlyNumber2: Array<number> = [1, 2];

// 여러가지 값이 오면 any 타입으로 정의

// * Tuple - 튜플은 배열릐 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식입니다.
const arr: [string, number] = ["string", 10];
// tuple은 배열의 길이 및 타입이 고정됩니다. 정의 되지 않은 타입, 인덱스로 접근시 오류가 납니다.

// * Enum
// 상수의 집합입니다.
// html의 option 태그 같이 어떠한 종류에 대한 지정된 타입이 들어오는경우 틀린 상수 값이 들어오는 것을 막기 위해 Enum으로 상수의 집합을 만들고,
// 그 이외의 값은 받지 않습니다.
enum PhoneType {
  Home = "home",
  Office = "office",
  Studio = "studio",
}
const str: PhoneType = PhoneType.Home;
