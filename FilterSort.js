const filterDropdown = document.querySelector("#filter");
const sortDropdown = document.querySelector("#sort");

export const FilterSort = (books, sortValue = "date-asc", filterValue = "all") => {
  //Gjort en kopia, istället för att mutera den orginella arrayen oops
  let newBooks = [...books];

if (filterValue == "favorites") {
    newBooks = newBooks.filter((book) => book.favorite);
  }

  if (sortValue == "date-asc") {
    function compareNumbers(a, b) {
      return b.createdAt - a.createdAt;
    }
    return newBooks.sort(compareNumbers);
  } else if (sortValue == "date-desc") {
    function compareNumbers(a, b) {
      return a.createdAt - b.createdAt;
    }
    return newBooks.sort(compareNumbers);
  } else if (sortValue == "title-asc") {
    function compareTitles(a, b) {
      return a.title.localeCompare(b.title);
    }
    return newBooks.sort(compareTitles);
  } else if (sortValue == "title-desc") {
    function compareTitles(a, b) {
      return b.title.localeCompare(a.title);
    }
    return newBooks.sort(compareTitles);
  } else if (sortValue   == "author-asc") {
    function compareAuthor(a, b) {
      return a.author.localeCompare(b.author);
    }
    return newBooks.sort(compareAuthor);
  } else if (sortValue == "author-desc") {
    function compareAuthor(a, b) {
      return b.author.localeCompare(a.author);
    }
    return newBooks.sort(compareAuthor);
  }
};
