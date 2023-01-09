// 숨어있는 숫자의 덧셈 (1)
// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000
// my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.
// 입출력 예
// my_string	result
// "aAb1B2cC34oOp"	10
// "1a2b3c4d123"	16
// 입출력 예 설명
// 입출력 예 #1

// "aAb1B2cC34oOp"안의 한자리 자연수는 1, 2, 3, 4 입니다. 따라서 1 + 2 + 3 + 4 = 10 을 return합니다.
// 입출력 예 #2

// "1a2b3c4d123Z"안의 한자리 자연수는 1, 2, 3, 4, 1, 2, 3 입니다. 따라서 1 + 2 + 3 + 4 + 1 + 2 + 3 = 16 을 return합니다.
// 유의사항
// 연속된 숫자도 각각 한 자리 숫자로 취급합니다.

function solution() {
  const my_string = "jiji123";
  // 숫자만 빼서 새 배열을 만듬
  // 후에 reduce를 사용해서 값을 다 더해줌

  // 문자열을 배열로 변환
  const newString = my_string.split("");

  // 숫자만을 추출해서 새배열을 생성한 뒤 map을 통해 각각 number로 다시 만들어줌
  const onlyNumber = newString
    .filter((numarr) => Number(numarr))
    .map((numarr) => Number(numarr));

  // sum에 value를 계속 더해줌
  const reducer = (sum, value) => sum + value;

  // reduce로 각 숫자를 합해줌 (reducer뒤에 0은 초기값)
  var answer = onlyNumber.reduce(reducer, 0);

  return answer;
}
