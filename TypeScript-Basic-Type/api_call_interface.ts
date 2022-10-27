// * axios response call interface
// api를 받을때 response 값 타입을 정의하는 방법입니다.
// api는 promise로 받으니 Promise로 감싸주고 그 안에 AxiosResponse를 사용합니다.
// 그 안에 이미 정의한 interface를 가져와 완성합니다.

import axios, { AxiosResponse } from "axios";

interface CovidSummaryResponse {
  Countries: any[];
  // {Country: "Afghanistan", CountryCode: "AF", Slug: "afghanistan", NewConfirmed: 241}
  Date: string;
  Global: any;
  Message: string;
}

// api axios response 정의
function fetchCovidSummary(): Promise<AxiosResponse<CovidSummaryResponse>> {
  const url = "https://api.covid19api.com/summary";

  return axios.get(url);
}

// 위 response interface 정의로 타입 추론
fetchCovidSummary().then((res) => res.data.Message);
