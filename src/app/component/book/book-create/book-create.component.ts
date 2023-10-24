import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from './book.model';
import { BookService } from '../book.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})

export class BookCreateComponent implements OnInit{
  
  book: Book = {
    id: 0,
    title: '',
    author: '',
    publishing_company: '',
    year: 0,
    description: '',
    image: '',
    url_Download: ''
  };
  

 constructor(private bookService: BookService,
              private router: Router,
              private formBuilder: FormBuilder
              ){}

  formGroup! : FormGroup;
  

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group ({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      publishing_company: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      url_Download: new FormControl('', [Validators.required])
    });
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
