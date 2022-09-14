const arr = [
  {
    name: "Rustam",
    password: "1234ru",
    age: 17,
    isLogin: "rustam",
  },
  {
    name: "Kani",
    password: "0987",
    age: 20,
    isLogin: "Kanihi",
  },
  {
    name: "Aizat",
    password: "i240",
    age: 21,
    isLogin: "Aiz",
  },
  {
    name: "Jami",
    password: "jam20",
    age: 20,
    isLogin: "Jamila",
  },
];

let newObj = {
  nameNew: null,
  password: null,
  age: null,
  isLogin: false,
};

function registerUser() {
  const { nameNew, password, age } = newObj;
  if (nameNew !== null || password !== null || age !== null) {
    const findUser = arr.find(item => item.name === newObj.name);
    console.log(findUser);
  }
}
const userName = prompt("Введите ваше имя");
const [{ name }] = arr;
if (newObj.nameNew !== arr.name) {
  alert("Идем Дальше!");
} else {
  alert("Такое имя пользователя существует");
}
const password1 = prompt("введите пароль");
const password2 = prompt("введите пароль еще раз");
if (password1 === "") {
  alert("Неверно!");
} else if (password2 === "") {
  alert("Неверно!");
} else if (password1 === password2) {
  alert("Верно!");
}
const newAge = prompt("введите ваш возраст");
const isLogin0 = prompt("введите логин");
console.log(userName, password1, password2, newAge, isLogin0);

registerUser();
