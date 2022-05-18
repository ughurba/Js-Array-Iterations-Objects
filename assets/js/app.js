// 2) Ededlerden ibaret bir array verilir. Hemin arrayi boyukden ededden kiciye  dogru sort elemek.

let numberArr = [2, 3, 10, 44, 23, 12];

console.log(numberArr.sort((a, b) => a - b).reverse());

// 3) ["Yanvar","Fevral","Mart","Aprel"]  - bu arrayi parametr kimi qebul eden bir function yazirsiz.Hemin function geriye yeni bir array qaytarir.
// Yeni yaranan arrayda hemin aylarin necenci ay oldugu yazilmalidir.
// Cavab bele olmlalidir: ["Yanvar -1","Fevral-2","Mart-3","Aprel-4"].

function month(arr) {
  let num = 0;

  const new_array = arr.map((value) => {
    ++num;
    value += -num;
    return value;
  });
  return new_array;
}

console.log(month(["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun"]));

//  4)String qebul eden bir function yaziriq. Hemin function yeni bir array qaytaracaq, hemin arrayin elementleri
//functiona gelen stringin sozlerinin herflerinin cemine beraber olmalidir.
//  Meselen: Functiona gelen string - "Salam olsun hamiya", hemin functionun qaytardiqi array ise - [5,5,6] olacaq.

function acceptString(str) {
  let arrayOfStrings = str.split(" ");

  const lengthArr = arrayOfStrings.map((value) => value.length);

  return lengthArr;
}
console.log(acceptString("salam olsun hamiya"));
