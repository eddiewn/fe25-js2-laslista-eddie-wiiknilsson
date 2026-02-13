import { favoriteBook } from "./backend.js";
import { deleteBook } from "./backend.js";
import { FilterSort } from "./FilterSort.js";

const filterDropdown = document.querySelector("#filter");
const sortDropdown = document.querySelector("#sort")

export function RenderBooks(books){
    console.log(books);
    document.querySelector("#book-showcase-section").innerHTML = "";
    books.map((book) => {
        const h2 = document.createElement("h2")
        h2.textContent = `Title: ${book.title}`;

        const p = document.createElement("p")
        p.textContent = `Author: ${book.author}`;

        const pFav = document.createElement("p")
        pFav.textContent = `Favorite: ${book.favorite}`;

        const favBtn = document.createElement("button")

        favBtn.addEventListener('click', () => {
            console.log(book.id)
            favoriteBook(book)
        })

        const delBtn = document.createElement("button")
        delBtn.textContent = "Delete Book"

        delBtn.addEventListener('click', () => {
            deleteBook(book)
        })
        
        favBtn.textContent = !book.favorite ? "Favorite Book" : "Unfavorite Book";

        document.querySelector("#book-showcase-section").append(h2, p, pFav, favBtn, delBtn)
    })
}