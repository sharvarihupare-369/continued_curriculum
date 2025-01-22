enum Genre {
  Fiction = "Fiction",
  NonFiction = "Non-Fiction",
  Mystery = "Mystery",
  Thriller = "Thriller",
  SciFi = "Sci-Fi",
  Life = "Life",
}

interface Book {
  id: number;
  title: string;
  author: string;
  genre: Genre;
  quantity: number;
}

type BookFormat = "paperformat" | "hardcover" | "ebook";

type LibraryBook = Book & {
  format: BookFormat;
};

interface Library {
  books: LibraryBook[];
}

let book1: LibraryBook[] = [
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
