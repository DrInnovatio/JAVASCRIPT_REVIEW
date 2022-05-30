// let and closure 

var list = document.querySelectorAll("li");

for (let i = 0; i < list.length; i++){
  list[i].addEventListener("click", function() {
    console.log(i + "th list on the page.")
  });
}


//for loop 안에 var 가 아니라 let 을 써야함.