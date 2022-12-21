const fruitList = [
  {
    사과: [
      {
        name: "사과",
        place: "2000원",
        color: "빨간색",
      },
    ],
  },
  {
    바나나: [
      {
        name: "바나나",
        place: "2000원",
        color: "노란색",
      },
    ],
  },
  {
    복숭아: [
      {
        name: "복숭아",
        place: "1000원",
        color: "핑크색",
      },
    ],
  },
  {
    딸기: [
      {
        name: "딸기",
        place: "12000원",
        color: "노란색",
      },
    ],
  },
];

/**
 * 검색하기
 * @description 검색을 할 수 있다
 */
const searchResult = document.getElementsByClassName("search_result_text")[0];
const searchDetails = document.getElementsByTagName("details")[0];
const searchBtn = document.querySelector("button");
var searchInput;

searchBtn.addEventListener("click", search);

// 검색 버튼 클릭 시 실행
function search() {
  // 검색창 값
  searchInput = document.querySelector("input").value;

  // fruit 변수를 반복자로 하여 fruitList 배열의 값 개수 만큼 실행
  for (let fruit in fruitList) {
    console.log(fruitList[fruit]); // fruitList 배열의 각 개체
    let fruitObj = fruitList[fruit];

    // num 변수를 반복자로 하여 fruitObj 객체의 값 개수 만큼 실행
    for (let num in fruitObj) {
      console.log(num); // 키
      console.log(fruitObj[num]); // 값

      // 검색어와 키가 같을 때 실행
      if (searchInput == num) {
        searchResult.innerText = num;
        searchDetails.innerText = JSON.stringify(Object.entries(fruitObj[num]));
        //Object.entries(객체) 객체를 배열로 나눕
        //JSON.stringify() js 값이나 객체를 JSON 문자열로 변환

        return;
      } else {
        searchResult.innerText = "검색어 없음";
      }
    }
  }
}
