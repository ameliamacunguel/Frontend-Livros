import { Component, OnInit } from '@angular/core';
import { Book } from '../book-create/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css']
})
export class BookReadComponent  implements OnInit{

  public books: Book[]=[]
  displayedColumns = [ 'id', 'title', 'author', 'publishing_company', 'year',  'actions' ]
  
  


  constructor(private bookService: BookService){}


  ngOnInit(): void {
      this.bookService.read().subscribe(book => {
        if(book){
          this.books = book;
          console.log(book);
        }
      })
  }
}
