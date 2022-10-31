// ? 함수 타입
// * 인터페이스는 값 정의 말고도 함수 정의시에도 사용된다.
// * 인자에 대한 타입 정의 그리고 리턴값에 대한 타입을 정의 합니다.
interface test2 {
  (test1: string, test2: number): boolean;
}

const test3: test2 = (a, b) => {
  console.log(a, b);
  // a-> string type 'a', b -> number type2
  return true;
};
test3("a", 2);

// * class에서 ts 사용 예제
class Person {
  // 이 클래스안에서만 사용한다면 private
  private name2: string;
  public age: number;
  // 값 읽기만 가능, set 불가
  readonly log: string;

  constructor(name2: string, age: number) {
    this.name2 = name2;
    this.age = age;
  }
}
// * 인터페이스 확장
// + 인터페이스의 재활용성을 높이기 위해 확장 기능을 사용한다.
// * 확장시 대상이 된 인터페이스의 속성을 모두 사용할 수 있다. 또한 상속받은 값을 또 상속 가능합니다.
interface Person {
  name: string;
}
interface Drinker extends Person {
  drink: string;
}
interface Developer extends Drinker {
  skill: string;
}
let fe = {} as Developer;
fe.name = "josh";
fe.skill = "TypeScript";
fe.drink = "Beer";

// ? 하이브리드 타입 - 인터페이스에는 객체에 대한 정의 뿐만 아니라 함수에 대한 정의가 동시에 들어갈 수 있습니다.
interface CraftBeer {
  (beer: string): string;
  brand: string;
  brew(): void;
}

function myBeer(): CraftBeer {
  let my = function (beer: string) {} as CraftBeer;
  my.brand == "Beer Kitchen";
  my.brew = function () {};
  return my;
}

let brewedBeer = myBeer();
brewedBeer("My First Beer");
brewedBeer.brand = "Pangyo Craft";
brewedBeer.brew();
