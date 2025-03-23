// what is promises?
// -> A promise is an object representing eventual completion (or failure) of an asyncronous operation and its resulting value.

// lets first learn the process of creation
const setTimeoutPromise = new Promise((resolve, reject) => {
  // what reasons you use promise -> DB calls , cryptography, network
  setTimeout(() => {
    resolve("Async task is Completed");
  }, 1000);
});

function logger(message) {
  console.log(message.toString());
}

setTimeoutPromise.then(logger).catch(() => {
  logger("Async task failed");
});

// promisified version of read file
import fs from "fs";
import { join } from "path";

const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

readFilePromise(join("./09_advance_one", "hello.txt"))
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(`Error reading file: ${err}`);
  });

// data fetching
// here you will learn about async/await syntax , its a cleaner way to handle promises
async function getData(url) {
  try {
    const response = await fetch(url);
    //checking status before parsing to json
    if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json(); // you have to wait for the conversion to json, because it is a time consuming process.

    return data;
  } catch (error) {
    return `Error fetching data: ${error}`;
  }
}

getData("https://jsonplaceholder.typicode.com/users/1")
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(err)
})
