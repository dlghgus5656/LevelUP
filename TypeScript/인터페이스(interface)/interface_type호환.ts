// ? 타입 호환
// * 타입 호환은 ts코드에서 특정 타입이 다른 타입과 잘 맞는지를 의미 한다. 타입에 정의된 속성의 타입을 가지고 타입이 호환되는지를 확인한다.
// * 구조적 타이핑이라고도 부른다.
interface Dev {
  name: string;
  skill: string;
}

interface Person2 {
  name: string;
}

let developer: Dev;
let person3: Person2;
// developer = person; // error: Property 'skill' is missing in type '{ name: string; age: number; }' but required in type 'Dev'.ts(2741)
// * 기본적으로 타입 호환은 오른쪽에 있는 타입이 더많은 속성 및 구조적으로 더 크면 왼쪽과 호환이 됩니다. (부분집합이어야 가능)
// person3 = developer; // developer는 person 타입을 포함함으로 ok
// !-------------------------
// todo 클래스에서 타입 호환 - 클래스를 썻을 때도 동일하게 오른쪽에 있는 타입이 왼쪽을 포함하여야 합니다.
interface Dev2 {
  name: string;
  skill: string;
}

class Person3 {
  name: string = "name";
}
let developer2: Dev2;
let add = function (a: number) {};
let sum = function (a: number, b: number) {};
// 1번과 2번의 차이는 sum 함수 구조 > add 함수 구조
// add = sum; // error: Type '(a: number, b: number) => void' is not assignable to type '(a: number) => void'.ts(2322)
sum = add; // ok

// !-------------------------
// todo 제네릭에서 타입 호환
//* 위와 동일하게 정의된 타입이 더 큰곳이 할당 받을 수 있습니다.
//* 두 타입이 다를 경우, 포함하지 않을 경우 할당 불가능합니다.

interface Empty<T> {}

var empty1: Empty<string> | undefined;
var empty2: Empty<number> | undefined;

empty2 = empty1;
empty1 = empty2;
interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
// notempty2 = notempty1; // Type 'NotEmpty<string>' is not assignable to type 'NotEmpty<number>'. Type 'string' is not assignable to type 'number'.

// !-------------------------
// todo 유틸리티 타입
// * 제네릭 타입이라고도 불린다.
// * 꼭 쓰지는 않아도 되지만, 쓰면 짧게 쓸수있다, 정의한 인터페이스를 변환 (js의 map 같은 느낌)

// * Partial - 파셜 타입은 특정 타입의 부분 집합을 만족하는 타입을 정의할 수 있습니다.
// ? 예시 1
interface Address {
  email: string;
  address: string;
}

type MyEmail = Partial<Address>;
const me: MyEmail = {}; // 가능
const you: MyEmail = { email: "noh5524@gmail.com" }; // 가능
const all: MyEmail = { email: "noh5524@gmail.com", address: "secho" }; // 가능

// ? 예시 2
interface Address2 {
  email: string;
  address: string;
}

type MyEmail2 = Partial<Address2>;
const me2: MyEmail = {}; // 가능
const you2: MyEmail = { email: "noh5524@gmail.com" }; // 가능
const all2: MyEmail = { email: "noh5524@gmail.com", address: "secho" }; // 가능

interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// Partial - 상품의 정보를 업데이트 (put) 함수 -> id, name 등등 어떤 것이든 인자로 들어올수있다
// 인자에 type으로 Product를 넣으면 모든 정보를 다 넣어야함
// 그게 싫으면
interface UpdateProduct {
  id?: number;
  name?: string;
  price?: number;
  brand?: string;
  stock?: number;
}
// 위와 같이 정의한다.
// 그러나 같은 인터페이스를 또 정의하는 멍청한 짓을 피하기 위해서 우리는 Partial을 쓴다.
function updateProductItem(prodictItem: Partial<Product>) {
  // Partial<Product>이 타입은 UpdateProduct 타입과 동일하다
}

// ? 예시 3 Partial 구현하기
// 아래 인터페이스를 다른 방법으로 아래와 같이 구현 가능하다
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

type partials = Partial<UserProfile>;

// // #1
// type UserProfileUpdate2 = {
//   username?: UserProfile["username"];
//   email: UserProfile["email"];
//   profilePhotoUrl?: UserProfile["profilePhotoUrl"];
// };

// // #2 - 맵드 타입
// type UserProfileUpdate3 = {
//   // index signatures
//   [p in 'username' | 'email' | 'profilePhotoUrl']? = UserProfile[p]
// };

// type UserProfileKeys = keyof UserProfile // 'username' | 'email' | 'profilePhotoUrl'
// // #3
// type UserProfileUpdate4 = {
//   [p in key of UserProfile]? = UserProfile[p]
// };

// // #4 - 파셜
// type RealPartial<T> = {
//   [p in key of T]? = T[p]
// };
