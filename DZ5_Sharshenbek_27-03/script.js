const books = ['Война и мир', 'унесенные призраками', 'Улисс', 'Управление в условиях кризиса. Как выжить и стать сильнее','римрвимроваимров','ууууууууууу'];
function findBooks(){
    const bookWithU = []
    const bookWithoutU = []
    for (let i = 0; i < books.length; i++) {
        if (books[i].toLowerCase().includes('у')) {
            bookWithU.push(books[i]);
        } else {
            bookWithoutU.push(books[i]);
        }
    }
    console.log('Книги с у',bookWithU);
    console.log('Книги без у',bookWithoutU);
}
findBooks(books);