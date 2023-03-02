// // //////////////////////////////////////
// function Person(name, city) {
// 	this.name = name;
// 	this.city = city;
// }

// Person.prototype.WhatsName = function () {
// 	console.log(`Mam na imię ${this.name}.`);
// };

// Person.prototype.WhereFrom = function () {
// 	console.log(`Jestem z ${this.city}.`);
// };

// const FirstPerson = new Person("Ala", "Warszawa");
// const SecondPerson = new Person("Kamila", "Kraków");
// FirstPerson.WhatsName();
// FirstPerson.WhereFrom();

// class Person4 {
// 	constructor(name, city) {
// 		this.name = name;
// 		this.city = city;
// 	}

// 	WhatsName() {
// 		console.log(`Msm na imię ${this.name}.`);
// 	}

// 	WhereFrom() {
// 		console.log(`Jestem z ${this.city}.`);
// 	}
// }

// const PersonOne = new Person("Dominika", "Barcelona");
// const PersonTwo = new Person("Adrianna", "Valencia");
// console.log(PersonTwo);

// //

// class Animal {
// 	constructor(name) {
// 		this.name = name;
// 	}

// 	sound() {
// 		console.log(`Zwierzak robi chuj chuj`);
// 	}
// }

// class Dog extends Animal {
// 	constructor(name, age) {
// 		super(name);
// 		this.age = age;
// 	}
// }

// class Cat extends Animal {
// 	constructor(name) {
// 		super(name);
// 	}

// 	sound() {
// 		console.log("miau");
// 	}
// }

// const dog = new Dog("Drops", 6);

// const cat = new Cat("kot");
// dog.sound();
// cat.sound();
// console.log(dog);
// console.log(cat);

// const user = {
// 	name: "Lily",
// 	age: 23,
// };

// const pet = {
// 	name: "Drops",
// 	type: "dog",
// };

// const userInfo = Object.assign({}, user, pet);

// console.log(user);

// const person = {
// 	name: "Lily",
// 	age: 23,
// 	job: "DJ",
// 	car: {
// 		brand: "Dodge",
// 		model: "Viper",
// 	},
// };

// const showInfo = () => {
// 	const { name, age, job } = person;

// 	console.log(
// 		`${person.name} praciuje jako ${person.job} i ma ${person.age} lata.`
// 	);
// };

// showInfo();

// const showInfo2 = ({ car: { brand, model } }) => {
// 	console.log(`Jej auto to ${brand} ${model}.`);
// };

// showInfo2(person);

// const colors = ["red", "green", "blue"];
// const firstColor = colors[0];
// const secondColor = colors[1];

// const [first, second] = colors;
// console.log(first, second);

// const btn = document.querySelector("button");
// const img = document.querySelector("img");

// const URL = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", () => {
// 	fetch(URL)
// 		.then((res) => res.json())
// 		.then((data) => img.setAttribute("src", data.message))
// 		.catch((err) => console.error(err));
// });

// const test = new Promise((resolve, reject) => {
// 	if (true) {
// 		resolve(`Jest gitówka`);
// 	} else {
// 		reject(`Błąd`);
// 	}
// });

// test.then((info) => console.log(info)).catch((err) => console.error(err));

// const CheckAge = (age) => {
// 	return new Promise((resolve, reject) => {
// 		if (age >= 18) {
// 			resolve();
// 		} else {
// 			reject("Masz za mało lat.");
// 		}
// 	});
// };

// const doubleCheck = () => {
// 	return new Promise((resolve) => {
// 		console.log("Sprawdzam jeszcze raz..");
// 		setTimeout(() => {
// 			resolve("Faktycznie, wiek się zgadza.");
// 		}, 1000);
// 	});
// };

// CheckAge(5).then(() => {
//     console.log('Chyba możesz wejść..')
//     return doubleCheck()
// })
// .then(res => console.log(res))
// .then(() => {
//     console.log('Weryfikacja zakończona')
// })
// .catch(error => console.error(error))

// async function Checking() {
// 	await CheckAge(22);
// 	console.log("Chyba możesz wejść");
// 	await doubleCheck();
// 	console.log("Faktycznie, wiek się zgadza.");
// 	console.log("Weryfikacja zakończona!");
// }

// Checking();
// const liczba = prompt("Podaj współczynnik a:");
// const liczba2 = prompt("Podaj współczynnik b:");
// const liczba3 = prompt("Podaj współczynnik c:");
// let delta;
// let p;

// const a = parseFloat(liczba);
// const b = parseFloat(liczba2);
// const c = parseFloat(liczba3);

// if (a === 0) {
// 	console.log("To nie jest równanie kwadratowe");
// } else {
// 	delta = b * b - 4 * a * c;
// 	p = Math.sqrt(delta);
// }

// if (delta === 0 && a !== 0) {
// 	const wynik = (-b / 2) * a;
// 	console.log(`Równanie ma jedno rozwiązanie, wynosi ${wynik} `);
// } else if (delta > 0) {
// 	const x1 = (-b - p) / (2 * a).toString();
// 	const x2 = (-b + p) / (2 * a).toString();
// 	console.log(`Równanie ma 2 rozwiązania: pierwsze ${x1}, drugie ${x2}.`);
// 	console.log(typeof x1);
// } else {
// 	console.log("Delta jest ujemna i nie ma rozwiązań");
// }





// const myName = "Wojtek"
// const age = 27;

function Me (myName, age) {
    console.log(`Mam na imię ${myName} i mam ${age} lat`)
}

Me('Wojtek', 27)

// let liczba

// for(i = 1; i<7;i++) {
//     liczba = Math.random()* 49;
//     console.log(liczba)
// }

let code;
let key = 42;
let keyGenerator;

function getSecretCode(value) {
   
   
    let keyGenerator = function() {
        let key = 12;
    console.log('in keyGenerator: ', key)
    return key;
   }
   
   let code = value * keyGenerator()
    console.log('in getSector Code: ', key);
    return code;
}

let secretCode = getSecretCode(2);
console.log(secretCode);
console.log('in keyGenerator: ', key);

let amount2 = 123;
amount2 = amount2.toString();
console.log(typeof amount2)

let amount = Number.parseFloat("123.12");  
console.log(typeof(amount));





