'use strict';


// ! -------------------------------- Task-1
// 1-я Функция генерит массив случайных чисел;
// 2 - я Функция возвращает объект с мин.и макс.числами;

// const generateRandomArray = (count, min, max) => {
//   const responseArray = [];
//   for (let i = 0; i < count; i++) {
//     responseArray.push(parseInt(Math.random() * (max - min) + min));
//   }

//   return responseArray;
// };

// const minMaxObject = arrayNum => {
//   return { min: Math.min(...arrayNum), max: Math.max(...arrayNum) };
// };

// let result = generateRandomArray(25, 1, 10);
// console.log(result);
// console.log(minMaxObject(result));

// ! -------------------------------- Task-2

// написать функцию, произвольное кол - во аргументов и
// вернуть среднее ариметическое;

// const average = (...numbers) => {
//   let total = 0;
//   for (let number of numbers) total += number;
//   return total / numbers.length;
// };

// console.log(average(1, 53, 85, 69, 2, 100));

// ! -------------------------------- Task-3
// создать объект каталог у которого были бы следующие возможности
// добавить, удалить, создать, изменить, вернуть количество, фильтрация по типу.

const catalog = {
  list: [],

  add: function (product) {
    this.list.push(product);
  },
    remove: function (id) {
        for (let i = 0, i < this.list.length; i++)
            if (product.id === id) this.list.splice(i, 1)
    }
  },
    create: function (name, type, quantity) {
      console.log(object);
    return { id: this.list.length + 1, name, type, quantity };
  },
change: function(id, prop) {
    let index;
    for (let i = 0, i < this.list.length; i++) {
        if (this.list[i].id === id) {
            index = 1;
            break;
        }
    }
    
    for (let key in props)
        this.list[index][key] = props[key];
  },
filterType: function() {
    let response = [];
    for (let product of this.list) 
        if (product.type === type) response.push(product); 
    return response;
      
  },
count: function() {
    let total = 0;
    for (let product of this.list) total += product.quantity;
    return
  },
};

let product = catalog.create('apple', 'phone', 1000);
let product2 = catalog.create('meizu', 'TV', 2000);
let product = catalog.create('xiaomi', 'phone', 3000);

catalog.add(product);
console.log(catalog.list.length);

catalog.add(product2);
console.log(catalog.list);

// catalog.remove(1)
console.log(catalog.list);
catalog.change(2, { name: samsung });
console.log(catalog.list);

console.log(catalog.filterType('TV'));
console.log(catalog.count());

