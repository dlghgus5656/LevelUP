// boolean
const bol: boolean = true;
console.log(bol);

// number
const naturaNumber: number = 100;
const integer: number = 0.1;

//string
const hangle: string = "한글";

// null / undified
const a: null = null;
const b: undefined = undefined;

// * object
// 필수 속성 - 해당 속성이 없으면 에러 도출
const required: { name: string; age: number } = { name: "abc", age: 100 };

// 필수속성이지만 바로 정의 하고 싶지 않은 경우 - 타입 단언(as)의 속성을 이용하면 인터페이스 정의 시점에서 object를 채워주지 않아도 에러가 도출 되지 않습니다.
const required2 = {} as { name: string; age: number }; // 에러 없음

//선택 속성 - 꼭 없어도 되는 속성 하지만 있다면 타입을 맞춰야함, ? 를 붙인다.
const selection: { name: string; age?: number } = { name: "abc" }; // age가 없어도 에러 없음

// 전체를 선택 속성으로 바꿈 - 필수 속성으로 정의된 인터페이스를 전부 선택 속성으로 바꿈(Partial)
const required3: Partial<{ name: string; age: number }> = {}; // name, age 가 없어도 에러 없음

// 읽기 전용 속성 - 읽기만 가능하고 재할당 금지, const와 비슷한 기능
const readOnly: { readonly name: string } = { name: "abc" };
// readOnly.name = 'error' -> readOnly.name 재할당 불가 에러 발생

// 빈 object 타입 정의 - 빈 object를 의미하는 타입은 아래와 같습니다.
const emptyObject: Record<string, never> = {};

// * any
// 말 그대로 모든 타입을 허용한다는 의미입니다.
// 자바스크립트로 된 파일을 타입스크립트로 바꿀 경우 한번에 데이터를 정적인 타입으로 바꾸는 것이 어렵기에 천천히 타입을 적용하기 위해
// 일단 모든 데이터에 대해 any로 적용하고, 점진적으로 정적 타입으로 값을 적용합니다.
const anyType: any = ["ddd", 2, true]; // 어떤 타입이든 에러 없음
