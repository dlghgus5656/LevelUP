// * declear - 전역변수를 만들거나, d.ts를 만들 때 사용합니다.
declare function setupMap(config: MapConfig): void;
interface MapConfig {
  lng: number;
  lat: number;
  tileSize: 8 | 16 | 32;
}
// 이 함수는 어느 파일에서든지 사용할 수 있습니다.
setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });

//
// * class private 변수
// - private 변수 선언은 앞에 private를 붙이거나 앞에 #를 붙인다.
// - private 변수는 class 내부에서만 활용 가능하며 class 밖에서는 부르지 못한다.
class Animal {
  #name: string;
  constructor(theName: string) {
    this.#name = theName;
  }
  bark() {
    return this.#name;
  }
}

// new Animal("Cat").#name // private 변수임으로 외부에서 사용 불가
const rt = new Animal("Cat");
rt.bark();

// * class protected 변수 - protected로 선언된 멤버를 파생된 클래스 내에서 접근할 수 있다는 점만 제외하면 private지정자와 매우 유사하게 동작합니다.

// private와 protected 차이

// 먼저 같은 코드를 private에서
class WWW {
  // # = private
  #name: string;
  constructor(name: string) {
    this.#name = name;
  }
  test() {
    return this.#name;
  }
}

class Employee extends WWW {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    // 밑에 return 오류 -> 파생된 class에서도 private(#name)는 접근 불가
    // return `Hello, my name is ${this.#name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
howard.test();
// console.log(howard.#name) // '#name' is not accessible outside class 'WWW' because it has a private identifier. 오류 발생

// protected
class WWW2 {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee2 extends WWW2 {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
  public getElevatorPitch() {
    // 파생된 class에서는 사용가능!!
    return `Hello, my nsme is ${this.name} and I work in ${this.department}.`;
  }
}

let howard2 = new Employee2("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 아예 외부 에서는 오류 발생
