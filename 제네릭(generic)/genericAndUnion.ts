// * 제네릭과 유니온의 공통점 - 제네릭과 유니온 타입이 둘다 여러 타입을 동시에 다룬다는 점에서 공통점이 있다.

// * 유니온의 단점
// * 유니온 타입의 경우 두 타입의 공통된 메소드만 타입 추적을 해준다는 단점이 있고, 받은 값을 그대로 리턴시,
// * 리턴 받은 값도 하나의 타입이 아닌 유니온 타입으로 지점되는 문제가 있다.
function logText8(text: string | number) {
  // string과 number의 공통된 메소드만 사용 가능
  return text;
}

// a의 타입은 string | number 이다. 그렇기 때문에 split 이용 불가
const a2 = logText8("a");
// a2.split(""); // error: split does not exist on type string | number
// * 위 처럼 유니온은 타입 가드를 한다 해도 return되는 값이 명확하지 않으므로 제네릭을 쓰는 것이 더 좋다.

// ? 제네릭으로 들어온 타입에 임의로 지정한 interface만 사용하도록 제한
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// ShoppingItem에 있는 키중 한가지가 T가 된다. -> 함수는 'name' | 'price' | 'stock' 만 쓸 수 있다.
function getShoppingItemOption<T extends keyof ShoppingItem>(item: T): T {
  return item;
}

getShoppingItemOption("name");

// * 아래 예시는 제네릭을 선언할 때 <O extends keyof T> 부분에서 첫 번째 인자로 받는 객체에 없는 속성들은 접근할 수 없게끔 제한하였습니다.
function getProperty<T, O extends keyof T>(obj: T, key: O) {
  return obj[key];
}
let obj = { a: 1, b: 2, c: 3 };

getProperty(obj, "a"); // okay
// getProperty(obj, "z") // error: "z" 는 "a", "b", "c" 속성에 해당하지 않습니다.

// * 제네릭이 가장 많이 쓰이는 부분
// * 서버와 통신을 하는 api를 호출할때 제네릭을 가장 효율적으로 사용합니다.
// * 서버로부터 오는 res 값의 규칙에 제네릭을 씁니다.
// * 프로미스는 제네릭 타입으로 정의됩니다.
function fetchItems(): Promise<string[]> {
  let items: string[] = ["a", "b", "c"];
  return new Promise((res) => res(items));
}

// ? async / await
interface Employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}
const fetchEmployees = async (): Promise<
  Array<Employee> | string | undefined
> => {
  const api = "http://dummy.restapiexample.com/api/v1/employees";
  try {
    const response = await fetch(api);
    const { data } = await response.json();
    return data;
  } catch (error: any) {
    if (error) {
      return error.message;
    }
  }
};

const fetchEmployee = async (
  url: string,
  id: number
): Promise<Record<string, string>> => {
  const response = await fetch(`${url}/${id}`);
  const { data } = await response.json();
  return data;
};
