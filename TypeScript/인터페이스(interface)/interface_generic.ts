// * interface에 제네릭을 넣는 법
// interface Dropdown<T, G> {
//     value: T;
//     selected: G
// }
// const obj2: Dropdown<string, boolean> = { value: "abc", selected: false};

// * interface 종합 예제
interface DropDownItem<T> {
  value: T;
  selected: boolean;
}

const emails: DropDownItem<string>[] = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: " hanmail.com", selected: false },
];

const numberOfProducts: DropDownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// * email과 number 둘다 받아야하는 상황
function createDropdownItem<T extends { toString: Function }>(
  item: DropDownItem<T>
): HTMLOptionElement {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag?.appendChild(item);
});

numberOfProducts.forEach(function (products) {
  const item = createDropdownItem<number>(products);
});
