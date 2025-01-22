"use strict";
var Genre;
(function (Genre) {
    Genre["Fiction"] = "Fiction";
    Genre["NonFiction"] = "Non-Fiction";
    Genre["Mystery"] = "Mystery";
    Genre["Thriller"] = "Thriller";
    Genre["SciFi"] = "Sci-Fi";
    Genre["Life"] = "Life";
})(Genre || (Genre = {}));
let book1 = [
    {
        id: 1,
        title: "The Great GatsBy",
        author: "F. Scott Fitzgerald",
        genre: Genre.Fiction,
        quantity: 5,
        format: "hardcover",
    },
    {
        id: 1,
        title: "Ikigai",
        author: "Hector Gracia",
        genre: Genre.Life,
        quantity: 10,
        format: "paperformat",
    },
];
