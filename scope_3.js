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
