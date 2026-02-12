import Book from "./BookClass.js";
import {RenderBooks} from "./RenderBooks.js";

export let books = [];

const URL =
    "https://laslistaduluxe-default-rtdb.europe-west1.firebasedatabase.app/books";

const uploadBook = async () => {
    const uploadTitle = document.querySelector("#book-title-upload").value;
    const uploadAuthor = document.querySelector("#book-author-upload").value;
    const res = await fetch(`${URL}.json`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: `${uploadTitle}`,
            author: `${uploadAuthor}`,
            favorite: false,
            createdAt: Date.now(),
        }),
    });

    const data = await res.json();
    console.log(data);
    fetchBooks();
};

export const fetchBooks = async () => {
    books = [];
    const res = await fetch(`${URL}.json`, {
        method: "GET",
    });

    const data = await res.json();

    if (data == null || undefined){
        RenderBooks();
        return;
    };

    Object.entries(data).map((entry) => {
        const book = new Book(
            entry[0],
            entry[1].title,
            entry[1].author,
            entry[1].favorite,
            entry[1].createdAt,
        );
        books.push(book);
    });
    console.log(books);
    RenderBooks(books.reverse());
};

export const favoriteBook = async (book) => {
    console.log(book);
    const res = await fetch(`${URL}/${book.id}.json`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            favorite: !book.favorite,
        }),
    });

    const data = await res.json();
    console.log(data);
    fetchBooks();
};

export const deleteBook = async (book) => {
    if(window.confirm("Are you sure you want to delete this book")){
        const res = await fetch(`${URL}/${book.id}.json`, {
            method: "DELETE",
        })
        fetchBooks();

    }
}

fetchBooks();

document.querySelector("#upload-btn").addEventListener("click", uploadBook);
