import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book-create/book.model';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit{

  
  book!: Book;
  constructor(private bookService: BookService,
              private router: Router ,
              private route: ActivatedRoute){}

    ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
     this.bookService.readById('id').subscribe((book) =>{
       this.book = book;
      });
    }
            
    deleteProduct(): void{
      this.bookService.delete(this.book).subscribe(() =>{
      this.bookService.showMessage("Livro excluido!")
        this.router.navigate(["/book"]);
      })
            
    }
            
    cancel(): void{
       this.router.navigate(["/book/"]);
      }
}
      