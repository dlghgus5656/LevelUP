// * 타입 단언 (type assertion)
// 타입스크립트에서 추론하는 값보다 개발자가 해당 변수의 타입을 더 잘 알고있을때,
// 변수에 원하는 타입을 강제로 부여 합니다.

let aa;
aa = "20";
aa = 10;
// let bb = aa;
// ts에서 a는 any로 추론하기 때문에 b도 any라고 ts는 추론한다.
// 그러나 개발자는 b가 10 이란걸 안다
// 즉, number임을 알기 때문에 b에 number를 강제로 단언(assertion) 한다.

let bb = aa as number;

// * DOM Api를 조작할 때 가장 많이 사용합니다. (querySelector, getElementByld 등등)
// let div = document.querySelector(".container")

// div.innerText = "..."; // error: Object is possibly null
// 위처럼 정의하면 div는 container이라는 class가 없을 수 있기 때문에 HTMLDivElement | null 이라는 타입을 보장받습니다.
// 타입 단언을 모른다면 null을 타입 가드 시켜주기 위해 아래와 같이 코드를 짭니다.

let div = document.querySelector(".container") as HTMLDivElement;

div.innerText = "...";

// 만약 container이라는 class 가 코드가 실행되는 시점에 무조건 존재한다라고 개발자가 확신한다면
// 위 처럼 type assertion을 이용하여 타입 가드를 제거하고 타입 단언으로 null 값을 제거합니다.
