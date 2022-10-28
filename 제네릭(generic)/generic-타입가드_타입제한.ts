// * 제네릭 타입 가드 / 타입 제한

function logText3<T>(text: T): T {
  //   console.log(text.length); // error: Property 'length' does not exist on type 'T'.
  console.log(text);
  return text;
}
logText3<string>("dd");
// * text에 .length 메소드가 있다는 단서가 없기에 ts에서 위와 같은 에러가 뜨게 됩니다.
// * string에 length 메소드가 있으나 ts 입장에서는 number, boolean을 넘기면 length 메소드가 없기 때문에 허용하면 안되는 상황인 것이죠.

// * 타입 가드를 이용해 특정 타입만 핸들링 할 수 있습니다.
function logText4<T>(text: T): T {
  if (typeof text === "string") {
    console.log(text.length);
  }
  return text;
} // * 위와 같이 string일 때만 length를 사용하도록 하는 것이죠.

// ? 인터페이스와 extends를 이용합니다.
// * 아래와 같이 length에 대한 메소드를 인터페이스로 지정하고 제네릭에 인터페이스를 extends 시킵니다.
// * 그에 따라 강제로 length 함수가 들어가게 되고 length 메소드를 실행할 수 있습니다.
interface LengthType {
  length: number;
}
// 제네릭으로 받은 타입 T는 lengthType의 하위 타입이다. 즉 length: number는 무조건 포함됨
function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength2("dd");
logTextLength2({ length: 3, q: 22 });
// * 만약 number를 넣는다면 number에는 length 메소드가 없기 때문에 LengthType 인터페이스에서 걸러지게 됩니다.
// logTextLength2(1) // error: Argument of type 'number' is not assignable to parameter of type 'LengthType'.
