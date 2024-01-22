import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books:any
  newBook:any={}
  oszlopok=[
    {key:"id", text:"Azonosító", type:"plain"},
    {key:"title", text:"Cím", type:"text"},
    {key:"description", text:"Ismertető", type:"text"},
    {key:"author", text:"Szerző", type:"text"},
]
  constructor(private base:BaseService){
    this.base.getBooks().subscribe(
      (res)=>{
        this.books=res
        console.log("Books:", this.books)
      }
    )
  }

  addBook(){
    this.base.addNewBook(this.newBook)
    this.newBook={}
  }

  updateBook(book:any){
    this.base.putBook(book)
  }

  deleteBook(book:any){
    this.base.deleteBook(book)
  }
}
