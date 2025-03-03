// filter method of array instance
// -> filter method of arrya instance is used to create a new array with all elements that passes the test implemented by the provided function.

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let filteredBooks = books.filter((book) => book.publish >= 2000);
console.log(filteredBooks);

// Filtering Data Based on Multiple Conditions
filteredBooks = books.filter(
  (book) =>
    book.publish >= 1981 && book.edition >= 2003 && book.genre === "Fiction"
);
console.log(filteredBooks);

// use cases and Real-World examples
// 1.Filtering active user
    // Description: Filtering out active users from a list of users.
    // code:
    const users = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true },
    ];
    const activeUsers = users.filter((user) => user.active);
    console.log(activeUsers);
    // [
    //   { id: 1, name: 'Alice', active: true },
    //   { id: 3, name: 'Charlie', active: true }
    // ]

// 2.Filtering Valid Emails
    // Description:  Filtering out valid email addresses from a list.
    // code:
    const emails = [
    "alice@example.com",
    "bob@example.com",
    "invalid-email",
    "charlie@example.com",
    ];
    const validEmails = emails.filter((email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    );
    console.log(validEmails); // ['alice@example.com', 'bob@example.com', 'charlie@example.com']
    // [
    //   { id: 1, name: 'Alice', active: true },
    //   { id: 3, name: 'Charlie', active: true }
    // ]
