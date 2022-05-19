// 2) Ededlerden ibaret bir array verilir. Hemin arrayi boyukden ededden kiciye  dogru sort elemek.

// let numberArr = [2, 3, 10, 44, 23, 12];

// console.log(numberArr.sort((a, b) => a - b).reverse());

// 3) ["Yanvar","Fevral","Mart","Aprel"]  - bu arrayi parametr kimi qebul eden bir function yazirsiz.Hemin function geriye yeni bir array qaytarir.
// Yeni yaranan arrayda hemin aylarin necenci ay oldugu yazilmalidir.
// Cavab bele olmlalidir: ["Yanvar -1","Fevral-2","Mart-3","Aprel-4"].

function month(arr) {


 const monthObj = {
   Yanvar : '-1',
   Fevral : '-2',
   Mart : '-3',
   Aprel : '-4',
   May : '-5',
   Iyun : '-6',
   Iyul : '-7',
   Avgust : '-8',
   Sentyabr : '-9',
   Oktyabr : '-10',
   Noyabr : '-11',
   Dekabr : '-12',
 }

const new_array = arr.map((value) => {

    for (const key in monthObj) {

      if (value === key){
      
        return value += monthObj[key]
       
      }

    }  
  
  });

  let filterArr= new_array.filter(item => item !== undefined)
 
  let newArr = filterArr.map(item => item.split('-'))
  
 let sortArray =  newArr.sort((a,b)=> a[1] - b[1])

    const monthsNumber = sortArray.map(item => item[1])
  
      const monthString = sortArray.map(item => item[0])
 

     const orr = monthString.map((item, index) => {
        
      return item += -monthsNumber[index]
       
       
      });  
  
    return orr
}

console.log(month(["Dekabr", "Fevral","Noyabr","Sentyabr", "Mart", "Aprel","Iyul","Oktyabr", "May", "Iyun","Yanvar"]));


//  4)String qebul eden bir function yaziriq. Hemin function yeni bir array qaytaracaq, hemin arrayin elementleri
//functiona gelen stringin sozlerinin herflerinin cemine beraber olmalidir.
//  Meselen: Functiona gelen string - "Salam olsun hamiya", hemin functionun qaytardiqi array ise - [5,5,6] olacaq.

// function acceptString(str) {
//   let arrayOfStrings = str.split(" ");

//   const lengthArr = arrayOfStrings.map((value) => value.length);

//   return lengthArr;
// }
// console.log(acceptString("salam olsun hamiya"));
