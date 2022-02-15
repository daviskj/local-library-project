function findAccountById(accounts, id) {
  return accounts.find((accounts) => 
  accounts.id.includes(id));
} // .find() --- returns account obj when passed certain id


function sortAccountsByLastName(accounts) {
  return accounts.sort((lastNameA, lastNameB) => 
  lastNameA.name.last.toLowerCase() < lastNameB.name.last.toLowerCase() ? -1:1 );
} // sorted accounts by last name


function getTotalNumberOfBorrows(account, books) {
  let result = 0;
  const borrowedBooks = books.forEach((books) => {     
    if (!!books.borrows) {
      books.borrows.forEach((accounts) => {        //.forEach() books.borrows array calling accounts
        if (accounts.id === account.id) {      //if matching account ids from books array and accounts, increment result
          result++;
        }
      });
    }
  });
  return result;
}


function getBooksPossessedByAccount(account, books, authors) {
  const booksBorrowed = [];      //will return array off books that are currently borrowed
  books.forEach((book) => {               //iterate through each book in the books array
    let bookBorrows = book.borrows;            
    bookBorrows.forEach((borrow) => {             //find how many times each book has been borrwed
      if (borrow.id === account.id && !borrow.returned) {   /*for each book borrowed, check to see if the borrower id matches the account id 
                                                              passed and if it has been returned. if true, add to booksborrowed array. */                                                 
        booksBorrowed.push(book);
      }
    });
  });


  let result = booksBorrowed.map((book) => {                                //.map() to loop each book in the array
    return { ...book, author : findAuthor(book, authors) };        //create new obj w/ book and author info
  });
  return result;
}

function findAuthor(book, authors) {                                    
  const author = authors.find((author) => author.id === book.authorId);     /* .find() authors to search for an author with the 
                                                                             same id as the books author */
  return author;                                                  //if found returns author
}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
