import { Component, OnInit } from '@angular/core';
import { Book } from '../book-create/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css']
})
export class BookReadComponent  implements OnInit{

  book: Book[]=[]
  displayedColumns = ['id', 'title', 'author', 'publishing_company', 'year', 'description','image','url_Download','actions' ]

  constructor(private bookService: BookService){}

  ngOnInit(): void {
      this.bookService.read().subscribe(book => {
        this.book = book
        console.log(book)
        
      })
  }
}
