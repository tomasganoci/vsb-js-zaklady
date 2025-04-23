"use strict";

const arr1 = [1, 2, 3];
const [a, b, c] = arr1;

console.log(a, b, c);

const restaurant = {
  name: "LaStrada",
  location: "Korlo Pokorného",
  categories: ["Italian", "Pizzeria", "Vegetarian"],
  starterMenu: ["foccacia", "bruscheta", "chléb", "capresse"],
  mainMenu: ["Pizza", "těstoviny", "Rizoto"],
  order: function (prvniJidlo, druheJidlo) {
    return [this.starterMenu[prvniJidlo], this.mainMenu[druheJidlo]];
  },
  otviraciHodiny: {
    po: {
      open: 12,
      close: 22,
    },
    ut: {
      open: 12,
      close: 22,
    },
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address, phone }) {
    console.log(
      `Orded accepted! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered at ${time} to ${address}. Contact phone: ${phone}.`
    );
  },
  pizzaOrder: function (ing1, ing2, ing3) {
    console.log(`Objednal sis ${ing1}, ${ing2} a ${ing3}`);
  },
};

let [prvni, druha] = restaurant.categories;
console.log(prvni, druha);
[prvni, druha] = [druha, prvni];
console.log(prvni, druha);

const [prvniJidloObjednavka, druheJidloObjednavka] = restaurant.order(2, 1);
console.log(prvniJidloObjednavka, druheJidloObjednavka);

const { name: jmeno, otviraciHodiny, categories } = restaurant;
console.log(jmeno, otviraciHodiny, categories);

const {
  po: { open: otevreno, close: zavreno },
} = otviraciHodiny;
console.log(otevreno, zavreno);

restaurant.orderDelivery({
  time: "15:30",
  adress: "Karla Pokorného",
  phone: "773615428",
  starterIndex: 0,
  mainIndex: 2,
});

// Spread operator
const pole = [1, 3, 5];
const lichePole = [...pole, 7, 9, 11];
console.log(lichePole);

const starterMenuCopy = [...restaurant.starterMenu];
console.log(starterMenuCopy);

const completeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(completeMenu);

const celeJmeno = "Tomáš Gánoci";
const celeJmenoArray = [...celeJmeno];
console.log(celeJmenoArray);

const ingredience = ["česnek", "bazalka", "rajčata"];
restaurant.pizzaOrder(...ingredience);

const newRestaurant = {
  ...restaurant,
  owner: "Tomáš Gánoci",
  chef: "Andrea Sachová",
  founded: 2022,
  name: "Black",
};
console.log(newRestaurant);

//Rest operator

const spreadArray = [1, 2, 3, ...[4, 5, 6]];
console.log(spreadArray);
const [d1, e1, f1, ...other] = spreadArray;
console.log(d1, e1, f1, other);

let add = function (...nums) {
  let sum = 0;
  for (let index = 0; index < nums.length; index++) {
    sum += nums[index];
  }
  return sum;
};
console.log(add(10, 20, 30, 40, 50));
