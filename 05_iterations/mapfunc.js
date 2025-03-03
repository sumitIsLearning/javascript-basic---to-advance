// map method of array instance
// -> map method of array instance create/returns a new array | populated with the result of |  calling a provided function on every element| in the calling array(the array on which the map func is called).



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr =  arr.map( function (num) {
    return num + 10;
});

// console.log(newArr);

// or

newArr = arr.map( (num) => num + 1);

// console.log(newArr);

// use Cases and Real world Examples
// 1.Transforming Data Types
    // Description: Converting all the elements of the array to a different data type.
    //code:
    const nums = [1, 2, 3, 4];
    const numsToString = nums.map( (num) => num.toString());
    console.log(numsToString);

// 2.Extracting Properties from Objects
    // Description: Extracting specific properties from an array of objects.
    //code:
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
      ];
    const names = users.map(user => user.name);
    console.log(names); // ['Alice', 'Bob', 'Charlie']

// 3.Calculating Derived Values
    // Description: Calculating new values based on existing data.
    //code:
    const products = [
        { id: 1, price: 100, discount: 0.1 },
        { id: 2, price: 200, discount: 0.2 },
        { id: 3, price: 300, discount: 0.15 }
      ];
    const finalPrices = products.map(product => product.price * (1 - product.discount));
    console.log(finalPrices); // [90, 160, 255]

// 4.Creating a New Array with Additional Information
    // Description: Adding new information to each element in the array.
    //code:
    const items = ['apple', 'banana', 'cherry'];
    const itemsWithDetails = items.map((item, index) => ({
        id: index + 1,
        name: item,
        category: 'fruit'
    }));
    console.log(itemsWithDetails);
    // [
    //   { id: 1, name: 'apple', category: 'fruit' },
    //   { id: 2, name: 'banana', category: 'fruit' },
    //   { id: 3, name: 'cherry', category: 'fruit' }
    // ]

