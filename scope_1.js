var name = "Global var";

function home() {
  var homeVar = "in the house";
  for (var i = 0; i < 100; i++){
    
  }
  console.log(i)
}

home();

//function 안에 있는 지역 변수를 먼저 찾고 그게 없으면 전역 변수를 찾는다. scope chain의 의미.


function hom2() {
  var homeVar = "in the house";
  for (let i = 0; i < 100; i++){
    
  }
  console.log(i)
}

home2();

// let 을 쓰면 for loop 안에서만 유효하다. 에러발생.

