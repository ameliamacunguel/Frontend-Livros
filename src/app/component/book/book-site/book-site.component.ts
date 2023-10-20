import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from "../book-create/book.model";
import { BookService } from "../book.service";

@Component({
  selector: 'app-book-site',
  templateUrl: './book-site.component.html',
  styleUrls: ['./book-site.component.css']
})
export class BookSiteComponent  implements OnInit{
  books!: Book;

  constructor(private router: Router, private bookService: BookService, private route: ActivatedRoute){}

  ngOnInit(): void {
       const id=this.route.snapshot.paramMap.get('id');
        if(id){
          this.bookService.readById(+id).subscribe(data => {
            if(data){
              this.books = data;
              console.log(data);
            }
          })
           
        }
      }
}

