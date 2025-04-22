// Rounding Math.PI using different Math methods
console.log(Math.round(Math.PI)); // Rounds to nearest integer: 3
console.log(Math.floor(Math.PI)); // Rounds down: 3
console.log(Math.ceil(Math.PI));  // Rounds up: 4

// Create a shallow copy of the Math object
const math = { ...Math };

// Overwrite the PI property in the copied object
math.PI = 4;
console.log(math.PI); // Outputs: 4 — because this is the copied object, not the original Math

// Get the property descriptor of Math.PI from the original Math object
const piDescripter = Object.getOwnPropertyDescriptor(Math, "PI");
// This shows that Math.PI is not writable, enumerable, or configurable
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// You could use Object.seal(math) to prevent adding/removing properties (not used here)
// You could use Object.freeze(math) to make all properties non-writable and non-configurable (also not used here)

// Redefine the descriptor of math.PI in the copied object
Object.defineProperty(math, "PI", {
    writable: false,     // Now you can't change its value
    configurable: false, // You also can't redefine or delete it
    enumerable: false    // It won’t show up in for...in or Object.keys()
});

// Get the descriptor of the new math.PI to verify changes
const descripter = Object.getOwnPropertyDescriptor(math, "PI");
console.log(descripter); // Logs the descriptor with writable: false, configurable: false

// Attempt to change math.PI after it has been made non-writable
math.PI = 5;
console.log(math.PI); // Still logs: 4 — the assignment is ignored silently in non-strict mode


// A real-world object representing a cup of chai (tea)
const chai = {
    name: "green tea",     // Type of tea
    price: 500,            // Price in some currency
    isAvailable: true,     // Availability status

    // A method to simulate placing an order
    order: function() {
        console.log("chai ban rahi hai...."); // Logs "chai is being made..."
    }
}

// Make the 'order' method non-writable and non-enumerable
Object.defineProperty(chai, "order", {
    writable: false,     // Now you can't overwrite the 'order' function
    enumerable: false    // 'order' won't show up in loops like for...in or Object.entries
})

// Loop through the chai object's properties and print them
for (let [key, value] of Object.entries(chai)) {
    // This will skip 'order' because it's now non-enumerable
    console.log(`${key} : ${value}`);
}
