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

    id!: string;

    ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if(id) {
     this.id = id;
     console.log(this.id);
     
     this.bookService.readById(+id).subscribe((book) =>{
      if(book){
      this.book = book;
     }
      });
    }
  }
            
    deleteProduct(): void{
      this.bookService.delete(this.book).subscribe(() =>{
      this.bookService.showMessage("Livro excluído com sucesso!")
        this.router.navigate(["/book"]);
      })     
    }
            
    cancel(): void{
       this.router.navigate(["/book/"]);
      }
}
      