import { Component, OnInit } from "@angular/core";
import { Book } from "../book-create/book.model";
import { BookService } from "../book.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-book-page",
  templateUrl: "./book-page.component.html",
  styleUrls: ["./book-page.component.css"],
})
export class BookPageComponent implements OnInit {
 books: Book[] = [];

  constructor(private router: Router, private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.read().subscribe((book) => {
      this.books = book;
      console.log(book);
    });
  }

  edit(id: number): void{

    console.log('teste...',id);
    this.router.navigate([`book/update/${id}`])
  }

  delete(id: number): void{
    console.log(id);
    this.router.navigate([`book/delete/${id}`])
    
  }

}
