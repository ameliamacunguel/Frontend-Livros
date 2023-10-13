import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from "../book-create/book.model";
import { BookService } from "../book.service";

@Component({
  selector: 'app-book-site',
  templateUrl: './book-site.component.html',
  styleUrls: ['./book-site.component.css']
})
export class BookSiteComponent  implements OnInit{
  books: Book[] = [];

  constructor(private router: Router, private bookService: BookService){}

  ngOnInit(): void {
       this.bookService.read().subscribe((book) => {
      this.books = book;
      console.log(book);
    });
  }
}
