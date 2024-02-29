export { };

// Property 'map' does not exist on type in TypeScript

// EXAMPLE 1 - Calling the `map()` method on a value that isn't an array

const obj = {
  name: 'Bobby Hadz',
  age: 30,
};

console.log(Array.isArray(obj)); // 👉️ false
console.log(Array.isArray([])); // 👉️ true

// ---------------------------------------------------

// // EXAMPLE 2 - Using the `Array.map()` method with an object

// const obj = {
//   name: 'Bobby Hadz',
//   age: 30,
// };

// const result = Object.keys(obj).map((key) => {
//   return { [key]: obj[key as keyof typeof obj] };
// });

// console.log(result); // 👉️ [{name: 'Bobby Hadz'}, {age: 30}]

// ---------------------------------------------------

// // EXAMPLE 3 - Use a type guard before calling the `Array.map()` method

// const maybeArray = Math.random() > 0.5 ? [1, 2, 3] : { name: 'Bobby Hadz' };

// if (Array.isArray(maybeArray)) {
//   const result = maybeArray.map((element) => {
//     return element * 2;
//   });

//   console.log(result); // 👉️ [2, 4, 6]
// }

// ---------------------------------------------------

// // #EXAMPLE 4 - Type the variable correctly before calling `Array.map()`

// // ✅ typed as an array of numbers
// const arr = [1, 2, 3] as number[];

// arr.map((element) => {
//   console.log(element);
// });

// ---------------------------------------------------

// // EXAMPLE 5 - Use a type assertion to solve the error

// const arr = [1, 2, 3] as unknown as { name: string };

// const result = (arr as unknown as any[]).map((element) => {
//   return element * 2;
// });

// console.log(result); // 👉️ [2, 4, 6]