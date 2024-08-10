let numbers = [1, 2, 3];
numbers[1] = 10;


let strings = ["one", "two", "three"];
strings.push("four");


let sumArray = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < sumArray.length; i++) {
    sum += sumArray[i];
}
console.log(sum);



let array5 = [10, 20, 30, 40, 50];
for (let i = 0; i < array5.length; i++) {
    console.log(array5[i]);
}


let stringArray = ["hello", "world", "JavaScript", "is", "good"];
for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > 5) {
        console.log(stringArray[i]);
    }
}


let numberArray = [12, 34, 5, 67, 89, 23, 90, 11, 45, 78];
let max = numberArray[0];
for (let i = 1; i < numberArray.length; i++) {
    if (numberArray[i] > max) {
        max = numberArray[i];
    }
}
console.log(max);



let evenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < evenArray.length; i++) {
    if (evenArray[i] % 2 === 0) {
        console.log(evenArray[i]);
    }
}
