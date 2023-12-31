import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book-create/book.model';


@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  book!: Book;
  constructor(private bookService: BookService,
              private router: Router ,
              private route: ActivatedRoute){}


        id! : string;
        
    ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if(id) {
     const up = +id;
    
     
     this.bookService.readById(up).subscribe(data =>{
      if(data){
      this.book = data;
      console.log(data);
     }
      });
    }
              }
            
              updateProduct(): void{
                this.bookService.update(this.book).subscribe(() =>{
                  this.bookService.showMessage("Livro actualizado com sucesso!")
                  this.router.navigate(["/book"]);
                })
            
              } 
            
              cancel(): void{
                this.router.navigate(["/book"]);
              }

}
