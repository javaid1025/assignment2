import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books = [
 {name : 'Javad Khan',author : '3357'},
  {name : 'Javad Khan',author : '3357'},
   {name : 'Javad Khan',author : '3357'},
    {name : 'Javad Khan',author : '3357'},
	 {name : 'Javad Khan',author : '3357'},
	  {name : 'Javad Khan',author : '3357'},
	   {name : 'Javad Khan',author : '3357'},
	    {name : 'Javad Khan',author : '3357'},
 
    ];
      constructor() { }
    
      getAllBooks()
      {
        return this.books;
      }
      addBook(name,author)
      {
        this.books.push({name:name,author:author});
      }
      deleteBook(name) {
        this.books = this.books.filter(e => {
          return e.name !== name;
        });
      }
}
