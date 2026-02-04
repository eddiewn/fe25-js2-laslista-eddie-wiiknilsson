import { books } from "./backend.js";
import { fetchBooks } from "./backend.js";
import { RenderBooks } from "./RenderBooks.js";

const filterDropdown = document.querySelector("#filter");
const sortDropdown = document.querySelector("#sort")

// Offantligt fult
    export const updateRender = () => {
    let newBooks = books;

            if(filterDropdown.value == "all"){
                RenderBooks(books)
            }else if(filterDropdown.value == "favorites"){
                newBooks = books.filter(book => book.favorite)
                RenderBooks(newBooks)
            }

            if (sortDropdown.value == "date-asc") {
                function compareNumbers(a, b){
                    return a.createdAt - b.createdAt;
                }
                const sortedBooks = newBooks.sort(compareNumbers)
                RenderBooks(sortedBooks)

            }
            else if(sortDropdown.value == "date-desc"){
                function compareNumbers(a, b){
                    return b.createdAt - a.createdAt;
                }
                const sortedBooks = newBooks.sort(compareNumbers)
                RenderBooks(sortedBooks)
            }
            else if(sortDropdown.value == "title-asc"){
                function compareTitles(a,b){
                    return a.title.localeCompare(b.title);
                }
                const sortedTitle = newBooks.sort(compareTitles)
                RenderBooks(sortedTitle)
            }

            else if(sortDropdown.value == "title-desc"){
                function compareTitles(a,b){
                    return b.title.localeCompare(a.title);
                }
                const sortedTitle = newBooks.sort(compareTitles)
                RenderBooks(sortedTitle)

            }
            else if(sortDropdown.value == "author-asc"){
                function compareTitles(a,b){
                    return a.author.localeCompare(b.author);
                }
                const sortedAuthor = newBooks.sort(compareTitles)
                RenderBooks(sortedAuthor)
            }
            else if(sortDropdown.value == "author-desc"){
                function compareTitles(a,b){
                    return b.author.localeCompare(a.author);
                }
                const sortedAuthor = newBooks.sort(compareTitles)
                RenderBooks(sortedAuthor)

            }
    
        }

filterDropdown.addEventListener("change", updateRender)
sortDropdown.addEventListener("change", updateRender)
