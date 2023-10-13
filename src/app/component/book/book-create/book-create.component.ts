import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from './book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})

export class BookCreateComponent implements OnInit{
  
  book!: Book ;

 constructor(private bookService: BookService,
              private router: Router){}

  ngOnInit(): void {
  }


  createBook(): void{

    this.bookService.create(this.book).subscribe((data)=> {
       if(data){
        this.bookService.showMessage('Livro criado!');
        this.router.navigate(['/book']);
       }
    })
  }

  cancel(): void{
    this.router.navigate(['/book']);
   }
}
