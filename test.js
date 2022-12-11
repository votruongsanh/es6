// function changeAds(base10) {
//   const binaryNumber = parseInt(base10).toString(2);
//   const binaryString = String(binaryNumber);

//   const binaryReverse = binaryString
//     .split("")
//     .map((value) => (value == 0 ? 1 : 0))
//     .join("");
//   return parseInt(binaryReverse, 2);
// }
// changeAds(50);

// // let items = [
// //   {
// //     name: "Vladimir",
// //   },
// // ];
// function inventoryList() {
//   let items = [];
//   const add = (name) => {
//     const names = items.filter((value) => value === name);
//     if (names.length === 0) {
//       items.push(name);
//     }
//   };

//   const remove = (name) => {
//     items = items.filter((value) => value !== name);
//   };

//   const getList = () => items;

//   return { add, remove, getList };
// }
const strArray = [
  { name: "D", age: 1 },
  { name: "A", age: 40 },
  { name: "D", age: 1 },
  { name: "D", age: 11 },
  { name: "A", age: 40 },
  { name: "C", age: 20 },
];
function checkNameAndAge(strArray = []) {
  for (let i = 0; i <= strArray.length; i++) {
    for (let j = 1; j <= strArray.length; j++) {
      if (
        strArray[i].name === strArray[j].name &&
        strArray[i].age === strArray[j].age
      )
        return true;
    }
  }
}
console.log(checkNameAndAge(strArray));
