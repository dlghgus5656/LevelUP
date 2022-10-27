// * class getter setter - 멤버 변수의 정보은닉을 지키기 위해서는 접근자를 private로 설정하고 getter과 setter을 사용한다.
// getter - 멤버 변수의 값을 호출하는 getter
// setter - 값을 설정하는 setter
const fullNameMaxLength = 10;

class Employee3 {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("fullName has a max length of " + fullNameMaxLength);
    }

    this._fullName = newName;
  }
}

let employee = new Employee3();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log(employee.fullName);
}

// * class 전역 프로퍼티
// 아래 예제에서는 모든 grid의 일반적인 값이기 때문에 origin에 static을 사용합니다.
// 각 인스턴스는 클래스 이름을 앞에 붙여 이 값에 접근할 수 있습니다.
// 인스턴스 접근 앞에 this. 를 붙이는 것과 비슷하게 여기선 전역 접근 앞에 Grid. 를 붙입니다.
class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + (yDist * yDist) / this.scale);
  }
  constructor(public scale: number) {}
}

let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
