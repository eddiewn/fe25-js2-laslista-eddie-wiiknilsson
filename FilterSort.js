const filterDropdown = document.querySelector("#filter");
const sortDropdown = document.querySelector("#sort");

// Offantligt fult
export const FilterSort = (books) => {
  //Gjort en kopia, istället för att mutera den orginella arrayen oops
  let newBooks = [...books];

  if (filterDropdown.value == "all") {

} else if (filterDropdown.value == "favorites") {
    newBooks = newBooks.filter((book) => book.favorite);
  }

  if (sortDropdown.value == "date-asc") {
    function compareNumbers(a, b) {
      return b.createdAt - a.createdAt;
    }
    return newBooks.sort(compareNumbers);
  } else if (sortDropdown.value == "date-desc") {
    function compareNumbers(a, b) {
      return a.createdAt - b.createdAt;
    }
    return newBooks.sort(compareNumbers);
  } else if (sortDropdown.value == "title-asc") {
    function compareTitles(a, b) {
      return a.title.localeCompare(b.title);
    }
    return newBooks.sort(compareTitles);
  } else if (sortDropdown.value == "title-desc") {
    function compareTitles(a, b) {
      return b.title.localeCompare(a.title);
    }
    return newBooks.sort(compareTitles);
  } else if (sortDropdown.value == "author-asc") {
    function compareAuthor(a, b) {
      return a.author.localeCompare(b.author);
    }
    return newBooks.sort(compareAuthor);
  } else if (sortDropdown.value == "author-desc") {
    function compareAuthor(a, b) {
      return b.author.localeCompare(a.author);
    }
    return newBooks.sort(compareAuthor);
  }
};
