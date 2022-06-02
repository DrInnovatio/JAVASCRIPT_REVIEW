// function home() {
//   var homename = "my house";
//   homename = "not my house"
//   console.log(homename);
// }

// home();

//difference between const and var

// HOME_NAME => const naming.

// const 를 기본으로 사용. 변경시 let을 사용. var 는 자주 쓰지 않는다.



//Const and Immutable array
//Const and Immutable array

function home() { 
  const list = ["apple", "orange", "watermelon"];
  //list = "harry bitch";
  list.push("Kiwi");
  console.log(list);
}

home();

// const 를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능하다.
// 값을 재할당 하는 것만 불가능 하다.

// The way to create IMMUTABLE ARRAY

const names = ["John", "Karl", "Jane", "Jimmy", "Paul"];
names_2 = [].concat(names, "Harry");
console.log(names, names_2);
console.log(names === names_2);

names_3 = [].concat(names_2, "Pizza");
console.log(names_3);


// ABOUT concat 

// concat() 
// 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.
// 기존배열을 변경하지 않습니다.
// 추가된 새로운 배열을 반환합니다.

const customers = ["John", "Karl", "Jane", "Jimmy"];
const fruits = ["banana", "apple", "kiwi", "lemon"];
const cities = ["LA", "NYC", "Seoul", "Tokyo"];
const array_1 = customers.concat(fruits);
const array_2 = customers.concat(fruits, cities);

console.log(array_1);
console.log(array_2);