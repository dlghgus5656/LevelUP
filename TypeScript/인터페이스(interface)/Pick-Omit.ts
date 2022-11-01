// ? Pick - 픽 타입은 특정 타입에서 몇 개의 속성을 선택하여 정의합니다.
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// * 상품 목록을 받아오기 위한 api
// function fetchProduct(): Promise<Product[]> {
//     // ... id, namem, price, brand, stock 모두를 써야함
// }

type shoppingItem = Pick<Product, "id" | "name" | "price">;

// * 상품의 상세정보 (Product의 일부 속성만 가져온다)
function displayProductDetail(shoppingItem: shoppingItem) {
  // id, name, price의 일부만 사용 or 별도의 속성이 추가되는 경우가 있음
  // 인터페이스의 모양이 달라질 수 있음
}

// * 3. Partial - 상품의 정보를 업데이트 (put) 함수 -> id, name 등등 어떤것이든 인자로 들어올수 있다.
// * 인자에 type으로 Product를 넣으면 모든 정보를 다 넣어야함
// * 그게 싫다면 아래와 같이 정의한다.
interface UpdateProduct {
  id?: number;
  name?: string;
  price?: number;
  brand?: string;
  stock?: number;
}
// * 그러나 같은 인터페이스를 또 정의하는 짓을 피하기 위해서 Partial을 사용한다.
// function updateProductItem(prodictItem: Partial<Product>)

// !~~~~~~~~~~~~~~~~~~~~~~
// ? Omit - 특정 속성만 제거한 타입을 정의합니다. pick의 반대
type shoppingItem2 = Omit<Product, "stock">;

const apple: Omit<Product, "stock"> = {
  id: 1,
  name: "red apple",
  price: 1000,
  brand: "del",
};
