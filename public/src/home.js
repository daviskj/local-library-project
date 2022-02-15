function getTotalBooksCount(books) {
 return books.length;
}


function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let total = books.reduce((acc, book) => {
    return ( acc + (book.borrows[0].returned === false))
  }, 0);
return total;
}


//helper function  for getMostCommonGenres
function helper(books) {
  let result = books.sort((countA, countB) => 
  (countA.count < countB.count ? 1: -1)).slice(0, 5); //sorting books array in decending order
  return result; 
}
function getMostCommonGenres(books) {
  const mostCommon = [];
  for (let book of books) {   
    //looping books array using .find to search for most common genre
    const genre = mostCommon.find((currentGenre) => currentGenre.name === book.genre);
    if (genre) { genre.count++; 
    } else { 
      mostCommon.push( {name: book.genre, count: 1} );
    }
  } 

  return helper(mostCommon);
}


function getMostPopularBooks(books) {
  const borrows = books.map((book) => {   
    /*.map to go through each book and create a new obj that 
    contains books title and # of times borrowed*/
    return (mostPopular = {          
      name: book.title,
      count: book.borrows.length,
    })
  })
  borrows.sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1))
  return borrows.slice(0, 5)  
}  //.sorts the new list of objects by the # of times books were borrowed
//returns first 5 books in list



function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  authors.forEach((author) => { //loop authors to pull names
    //create new object authorCount to hold names and count of borrows
    let authorCount = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0 };

    books.forEach((book) => {  //loop books to check book ids against author ids
      if (book.authorId === author.id) authorCount.count += book.borrows.length;
    });           //if author id === book author id, add to count 
    popularAuthors.push(authorCount);
  });
  popularAuthors.sort((authorA, authorB) => authorB.count - authorA.count);
  return popularAuthors.slice(0,5); 
};        //sort poopularAuthors list decending order and return first 5 in list











module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
