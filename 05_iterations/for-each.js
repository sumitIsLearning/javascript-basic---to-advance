// forEach method of array instance
// -> forEach method of array instance executes a provided function once for each element of an array.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(function (num) {
  console.log(num);
});

// or
arr.forEach((num) => console.log(num));

// Note: forEach does not return anything even if you explicitly try to return;
//example:
const myNum = arr.forEach((num) => {
  return num;
});
console.log(myNum);

arr.forEach((num) => console.log(num + 1));

// some use Cases and Real-world examples
// 1. Loggin Each Element:
    // Description: Logging each element of an array can be useful for debugging or monitoring purposes.

    //code:
    const numbers = [1, 2, 3, 4, 5];
    numbers.forEach((number) => {
    console.log(number);
    });

// 2. Updating Array Elements
    // Description: Modifying each element in an array based on some condition or operation.

    //code:
    const prices = [100, 200, 300, 400];
    prices.forEach((price, index, array) => {
    array[index] = price * 1.1; // Increase each price by 10%
    });
    console.log(prices); // [110, 220, 330, 440]

// 3. Data Transformation
    // Description: Transforming data from one format to another.

    //code:
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ];
    const names = [];
    users.forEach(user => {
        names.push(user.name);
    });
    console.log(names); // ['Alice', 'Bob', 'Charlie']