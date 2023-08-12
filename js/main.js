let me = {};
me.name = "Viktor";
me.age = 15;
// console.log(user);

localStorage.setItem("me", JSON.stringify(me));
let savedValue = JSON.parse(localStorage.getItem('me'));
document.write(savedValue.name + " " + savedValue.age);