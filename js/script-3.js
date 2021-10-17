// ЗАДАЧА 1:

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// console.table(apartment);

// ЗАДАЧА 2:

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// console.table(apartment);

// ЗАДАЧА 3:

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// ЗАДАЧА 4:

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// console.log(lastTag);

// ЗАДАЧА 5:

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// console.table(apartment);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {country: "Jamaica", city:"Kingston",};
// console.table(apartment);

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];
// const product = {
//   name,
//   price,
//   image,
//   tags,
// };
// console.table(product);

// const emailInputName = "email";
// const passwordInputName = "password";
// const credentials = {
// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",
// };
// console.table(credentials);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
 
// console.table(keys);
// console.log(keys);
// console.log(values);

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;
// for (const key in apartment) {

//   if (apartment.hasOwnProperty(key)) {    
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// };
// console.table(keys);
// console.log(keys);
// console.log(values);

// function countProps(object) {
//   let propCount = 0;
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       console.log(object[key]);
//       propCount = propCount + 1;
//       console.log(propCount);
//     }
//   }
//   return `количество собственных свойств объекта - ${propCount}`;
// };
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);

// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//    propCount += 1;
//   }
//   return propCount;
// }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// function countProps(object) {  
//   const keys = Object.keys(object);  
//   return keys.length;
// }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary = totalSalary + value;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// };
// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {

//   for (const product of products) {
    
//     if (product.name === productName) {  
//       return product.price;
//     } 
//   } return null; 
// }
// console.log(getProductPrice("Engine"));

// ЗАДАЧА 19:
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   const arrayName = [];
//   for (const product of products) {
//     if (propName === "name") {
//       arrayName.push(product.name);
//     } else if (propName === "quantity") {
//       arrayName.push(product.quantity);
//     } else if (propName === "price") {
//       arrayName.push(product.price);
//     }
//   }
//   return arrayName;
// }
// console.log(getAllPropValues("category"));

// ЗАДАЧА 20:
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function calculateTotalPrice(productName) {
//   for (const product of products) {
//     if (productName === product.name) {      
//       return product.price * product.quantity
//     }
//   }
//  return 0
// }
// console.log(calculateTotalPrice("Radar"));

// ЗАДАЧА 21:
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {yesterday, today, tomorrow} = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// ЗАДАЧА 22:
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",} = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// ЗАДАЧА 23:
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {yesterday:highYesterday, today:highToday, tomorrow:highTomorrow, icon:highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",} = highTemperatures
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);

// ЗАДАЧА 24:
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const {hex, rgb} of colors) { 
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// };
// console.log(hexColors);
// console.log(rgbColors);

// ЗАДАЧА 25:
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const { today: {low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",}, tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',}, } = forecast;

// console.log(tomorrowIcon);

// ЗАДАЧА 26:
// function calculateMeanTemperature(forecast) {
//   const { today: { low: todayLow, high: todayHigh, }, tomorrow: {low: tomorrowLow, high: tomorrowHigh,}, } = forecast;
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// };
// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));

// ЗАДАЧА 27:
// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = (Math.max(...scores));
// const worstScore = (Math.min(...scores));
// console.log(bestScore);
// console.log(worstScore);

// ЗАДАЧА 28:
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = (Math.max(...allScores));
// const worstScore = (Math.min(...allScores));
// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// ЗАДАЧА 29:
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// const finalSettings = {...defaultSettings, ...overrideSettings};
// console.log(finalSettings);

// ЗАДАЧА 30:
// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     return { category, priority, completed, ...data,};
// }
// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));

// ЗАДАЧА 31:
// function add(...args) {
//     let result = 0;
//     for (const arg of args) {
//         result = result + arg;
//     };
//     return result;
// }
// console.log(add(15, 27));

// ЗАДАЧА 32:
// function addOverNum(num,...args) {
//     let total = 0;
//     for (const arg of args) {      
//         if (arg > num)
//     total += arg;
//   }
//   return total;
// }
// console.log(addOverNum(50, 15, 27));

// ЗАДАЧА 33:
// function findMatches(firstArry, ...nambersArrey) {
//   const matches = [];
//     for (const num of nambersArrey) {
//         if (firstArry.includes(num)) {           
//             matches.push(num);
//          }
//     }
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// ЗАДАЧА 34:
// const bookShelf = {
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//     removeBook(bookName) {
//         return `Deleting book ${bookName}`;
//     },
//     updateBook(oldName, newName) {
//          return `Updating book ${oldName} to ${newName}`;
//     },
// };
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// ЗАДАЧА 35:
// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {      
//         const bookIndex = this.books.indexOf(oldName);
//         console.log(this.books.splice(bookIndex, 1, newName));
//         return bookShelf.books;
//     }
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

// ЗАДАЧА 36:
// const atTheOldToad = {
// potions: [],
// };
// console.log(atTheOldToad.potions);

// ЗАДАЧА 37:
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
    
//     getPotions() {
//         return atTheOldToad.potions;
//     },
// };
// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.getPotions());

// ЗАДАЧА 38:
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     this.potions.push(potionName);
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));

// ЗАДАЧА 39:
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     const bookIndex = this.potions.indexOf(potionName);
//         console.log(this.potions.splice(bookIndex, 1));
//         return this.potions;
//   },
// };
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));

// ЗАДАЧА 40:
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     const bookIndex = this.potions.indexOf(oldName);
//         console.log(this.potions.splice(bookIndex, 1, newName));
//         return this.potions;
//   },
// };
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// ЗАДАЧА 41:
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ], 

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {

//     const newArrayAddName = [];    

//     for (const item of this.potions) {
//       newArrayAddName.push(item.name);
//     }
 
//       if (newArrayAddName.includes(newPotion.name)) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       } else {
//         this.potions.push(newPotion);
//         return this.potions;
//       }
//   },

//   removePotion(potionName) {

//     const newArrayRemoveName = [];    

//     for (const item of this.potions) {
//       newArrayRemoveName.push(item.name);
//     }
//     const potionIndex = newArrayRemoveName.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     } else {
//       this.potions.splice(potionIndex, 1);
//       return this.potions;      
//     }    
//   },

//   updatePotionName(oldName, newName) {

//     const newArrayUpdateName = [];
    
//     for (const item of this.potions) {
//       newArrayUpdateName.push(item.name);
//     }
    
//     const potionIndex = newArrayUpdateName.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     } else {      
//       this.potions[potionIndex].name = newName;
//       return this.potions;
//     }
//   },
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 520 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));

// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;
// const d = [b[0], ...b[1]]
// const array = [...a, c, ...d];
// console.log(array);
// Result: ["a", "b", "c", 0, 1, 2, 3];

// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
// const x = a.slice(0, 3);
// const y = a.slice(-2);
// const array = [...x, ...x, ...y];
// const array = a.copyWithin(3, 0, 3);
// console.log(array);
// console.log(x);

// Result: ["a", "b", "c", "a", "b", "c", "g", "h"];
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const array = a.fill(0, 5, 8);
// console.log(a);
// Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];


// const number = -12345;
// const stringNumber = String(number);
// const reversNumber = [];
// if (number >= 0) {
//   for (let i = stringNumber.length - 1; i >= 0; i -= 1) {
//     reversNumber.push(stringNumber[i]);
//   } console.log(Number(reversNumber.join('')));
// } else if(number < 0) {
//   for (let i = stringNumber.length - 1; i >= 0; i -= 1) {
//     reversNumber.push(stringNumber[i]);
//   } reversNumber.pop();
//   } 
//console.log(reversNumber.join('') * -1);

