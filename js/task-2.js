function makeArray(firstArray, secondArray, maxLength) {
  const arr1Lenghts = firstArray.lenght;
  const arr2Lenghts = secondArray.lenght;
  const number = arr1Lenghts + arr2Lenghts;

  if (number <= maxLength) {
    return firstArray.concat(secondArray);
  } else {
    const resultArray = firstArray.concat(secondArray).slice(0, maxLength);
    return resultArray;
  }
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
