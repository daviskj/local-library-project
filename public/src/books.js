function findAuthorById(authors, id) {
  return authors.find((authors) => authors.id === id);
}


function findBookById(books, id) {
  return books.find((books) => books.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let borrowStatus = [];
  let returned = books.filter((book) => book.borrows[0].returned === true);
  //filters books array, and returning true if book has been returned
  let notReturned = books.filter((book) => book.borrows[0].returned === false);
    //filters books array, and returning false if book has not been returned
    borrowStatus.push(notReturned); //push returned/notReturned results back to borrowStatus array
    borrowStatus.push(returned);
    return borrowStatus;
  }


function getBorrowersForBook(book, accounts) {
let result = book.borrows.map((borrows) => {    //.map to create list of borrowers
  let account = accounts.find((account) => account.id === borrows.id); //find corresponding account for each borrower
  return { ...borrows , ...account };   //return list of borrows and accounts
});

return result.slice(0 , 10);    //returns only first 10 in list
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
